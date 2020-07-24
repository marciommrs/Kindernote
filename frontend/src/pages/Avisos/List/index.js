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

export default function Avisos() {
  const history = useHistory();
  const classes = useStyles();
  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    api.get('/avisos')
      .then(response => {
        setAvisos(response.data);
      })
  }, []);

  async function handleDeleteAviso(id) {
    try {
      await api.delete(`/avisos/${id}`);
      setAvisos(avisos.filter(aviso => aviso.id !== id));
      NotificationManager.info('Aviso excluído!');
    } catch(err) {
      alert('Erro ao deletar o aviso, tente novamente.')
    }
  }

  function handleAddAviso() {
    history.push("/addAviso/");
  }

  function handleEditAviso(id) {
    history.push("/editAviso/", {id: id});
  }

  function handleViewAviso(id) {
    history.push("/viewAviso/", {id: id, readOnly: true});
  }

  return (
        <>
          <HeaderDashboard title="Avisos" handleAdd={handleAddAviso}/>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Professor</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {avisos.map((aviso) => (
                  <TableRow key={aviso.id}>
                    <TableCell component="th" scope="row">{aviso.tipo}</TableCell>
                    <TableCell>{aviso.descricao}</TableCell>
                    <TableCell>{aviso.professor}</TableCell>
                    <TableCell>
                        <EditIcon onClick={() => handleEditAviso(aviso.id)} className="header-icon" />
                    </TableCell>
                    <TableCell>
                        <DeleteForeverIcon onClick={() => handleDeleteAviso(aviso.id)} className="header-icon" />
                    </TableCell>
                    <TableCell>
                        <FindInPageIcon onClick={() => handleViewAviso(aviso.id)} className="header-icon" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
  );

}