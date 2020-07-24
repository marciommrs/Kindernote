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
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HeaderDashboard from '../../Dashboard/HeaderDashboard';

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

export default function Comunicados() {
  const history = useHistory();
  const classes = useStyles();
  const [comunicados, setComunicados] = useState([]);

  useEffect(() => {
    api.get('/comunicados')
      .then(response => {
        setComunicados(response.data);
      });
  }, []);

  async function handleDeleteComunicado(id) {
    try {
      await api.delete(`/comunicados/${id}`);
      setComunicados(comunicados.filter(comunicado => comunicado.id !== id));
      NotificationManager.info('Comunicado excluído!');
    } catch(err) {
      alert('Erro ao deletar comunicado, tente novamente.')
    }
  }

  function handleAddComunicado() {
    history.push("/addComunicado/");
  }

  function handleEditComunicado(id) {
    history.push("/editComunicado/", {id: id});
  }

  function handleViewComunicado(id) {
    history.push("/viewComunicado/", {id: id, readOnly: true});
  }

  return (
        <>
          <HeaderDashboard title="Comunicados" handleAdd={handleAddComunicado}/>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Assunto</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell> 
                </TableRow>
              </TableHead>
              <TableBody>
                {comunicados.map((comunicado) => (
                  <TableRow key={comunicado.id}>
                    <TableCell component="th" scope="row">{comunicado.assunto}</TableCell>
                    <TableCell>{comunicado.descricao}</TableCell>
                    <TableCell>
                        <EditIcon onClick={() => handleEditComunicado(comunicado.id)} className="header-icon" />
                    </TableCell>
                    <TableCell>
                        <DeleteForeverIcon onClick={() => handleDeleteComunicado(comunicado.id)} className="header-icon" />
                    </TableCell>
                    <TableCell>
                        <FindInPageIcon onClick={() => handleViewComunicado(comunicado.id)} className="header-icon" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
  );

}