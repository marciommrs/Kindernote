import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TextField from '../../../components/TextField';
import TextArea from '../../../components/TextArea';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Notifications
import { NotificationManager} from 'react-notifications';
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

export default function AvisosEdit(props) {
  const history = useHistory();
  const classes = useStyles();

  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [professor, setProfessor] = useState('');

  const avisoId = props.location.state?.id;
  const editAviso = props.location.state?.editAviso;
  const addAviso = props.location.state?.addAviso;

  console.log(props.location);


  useEffect(loadAviso, [avisoId]);

  function isEdit() {
    return editAviso || addAviso;
  }
  
  function loadAviso() {
    if (avisoId) {
      api
        .get(`/avisos/${avisoId}`)
        .then((response) => {
          setTipo(response.data.tipo);
          setDescricao(response.data.descricao);
          setProfessor(response.data.professor);
        });
    }
  }

  async function handleNewAviso(e) {
    e.preventDefault();

    const data = {
      avisoId,
      tipo,
      descricao,
      professor
    };

    try {
      if (avisoId) {
        await api.put(`/avisos/${avisoId}`, data);
        NotificationManager.success('Aviso alterado com sucesso!');
      } else {
        await api.post('/avisos', data);
        NotificationManager.success('Aviso cadastrado com sucesso!');
      }
      history.push('/avisos');
    } catch(err) {
      alert('Erro ao cadastrar aviso, tente novamente.');
    }
  }

  function navigate(url) {
    history.push(url);
  }


  return (
        <>
          <div className="header-container">
            <h1>Aviso</h1>
            <ArrowBackIcon
              className="header-icon"  
              fontSize="large"
              onClick={() => navigate("/avisos")}/>
          </div>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleNewAviso}>
            <TextField 
              id="tipo-id" 
              label="Tipo"
              value={tipo}
              onChange={e => setTipo(e.target.value)}
              disabled={!isEdit()}/>
            <TextArea 
              id="descricao-id" 
              label="Descrição" 
              height={150}
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              disabled={!isEdit()}/>
            <TextField 
              id="professor-id" 
              label="Professor"
              value={professor}
              onChange={e => setProfessor(e.target.value)}
              disabled={!isEdit()}/>
            <Button 
              type="submit" 
              className={classes.btn} 
              variant="contained" 
              color="primary"
              disabled={!isEdit()}>
                Salvar
            </Button>
          </form>
        </>
  );
}