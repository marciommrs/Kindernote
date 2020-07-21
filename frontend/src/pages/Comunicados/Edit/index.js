import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TextField from '../../../components/TextField';
import TextArea from '../../../components/TextArea';
import Dropzone from '../../../components/Dropzone';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Notifications
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

//Api backend
import api from '../../../services/api';

import './styles.css';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(20),
      width: '80ch',
    },
  },
  btn : {
    width: '25%',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function setSelectedFile(file) {
  alert(file.name);
}

export default function ComunicadosEdit(props) {
  const history = useHistory();
  const classes = useStyles();

  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');

  
  const comunicadoId = props.match.params.id;
  useEffect(loadComunicado, [comunicadoId]);
  
  function loadComunicado() {
    if (comunicadoId) {
      api
        .get(`/comunicados/${comunicadoId}`)
        .then((response) => {
          setAssunto(response.data.assunto);
          setDescricao(response.data.descricao);
        });
    }
  }

  async function handleNewComunicado(e) {
    e.preventDefault();

    const data = {
      comunicadoId,
      assunto,
      descricao
    };

    try {
      if (comunicadoId) {
        await api.put(`/comunicados/${comunicadoId}`, data);
        NotificationManager.success('Comunicado alterado com sucesso!');
      } else {
        await api.post('/comunicados', data);
        NotificationManager.success('Comunicado cadastrado com sucesso!');
      }
      history.push('/comunicados');
    } catch(err) {
      alert('Erro ao cadastrar comunicado, tente novamente.');
    }
  }

  function navigate(url) {
    history.push(url);
  }


  return (
        <>
          <div className="header-comunicado">
            <h1>Comunicado</h1>
            <ArrowBackIcon
              className="header-icon"  
              fontSize="large"
              onClick={() => navigate("/comunicados")}/>
          </div>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleNewComunicado}>
            <TextField 
              id="title-id" 
              label="Assunto" 
              value={assunto}
              onChange={e => setAssunto(e.target.value)}/>
            <TextArea 
              id="info-id"
              label="Informativo"
              height={100}
              value={descricao}
              onChange={e => setDescricao(e.target.value)}/>
            <Dropzone onFileUploaded={setSelectedFile} />
            <Button type="submit" className={classes.btn} variant="contained" color="primary">Salvar</Button>
          </form>
        </>
  );
}