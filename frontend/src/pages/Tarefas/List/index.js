import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FindInPageIcon from '@material-ui/icons/FindInPage';

// Notifications
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// Api backend.
import api from '../../../services/api';

import './styles.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Tarefas() {
  const history = useHistory();
  const classes = useStyles();
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    api.get('/tarefas')
      .then(response => {
        setTarefas(response.data);
      })
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`/tarefas/${id}`);
      setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
      NotificationManager.info('Tarefa excluída!');
    } catch(err) {
      alert('Erro ao excluir a tarefa, tente novamente.')
    }
  }

  function handleAdd() {
    history.push("/addTarefa/");
  }

  function handleEdit(id) {
    history.push("/editTarefa/", {id: id});
  }

  function handleView(id) {
    history.push("/viewTarefa/", {id: id, readOnly: true});
  }

  return (
        <>
          <div className="header-comunicado">
            <h1>Tarefas</h1>
            <AddCircleOutlineIcon
              className="header-icon"  
              fontSize="large"
              onClick={() => handleAdd()}/>
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Professor</TableCell>
                  <TableCell>Turma</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Matéria</TableCell>
                  <TableCell>Tema</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((tarefa) => (
                  <TableRow key={tarefa.id}>
                    <TableCell component="th" scope="row">{tarefa.professor_nome}</TableCell>
                    <TableCell>{tarefa.turma_descricao}</TableCell>
                    <TableCell>{tarefa.data_str}</TableCell>
                    <TableCell>{tarefa.materia_descricao}</TableCell>
                    <TableCell>{tarefa.tema}</TableCell>
                    <TableCell>
                        <EditIcon onClick={() => handleEdit(tarefa.id)} className="header-icon" />
                    </TableCell>
                    <TableCell>
                        <DeleteForeverIcon onClick={() => handleDelete(tarefa.id)} className="header-icon" />
                    </TableCell>
                    <TableCell>
                        <FindInPageIcon onClick={() => handleView(tarefa.id)} className="header-icon" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
  );

}