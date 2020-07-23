import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Button from '@material-ui/core/Button';
import TextField from '../../../components/TextField';
import TextArea from '../../../components/TextArea';
import DateField from '../../../components/DateField';
import SelectField from '../../../components/SelectField';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Notifications
import { NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

//Api backend
import api from '../../../services/api';

//Styles
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

export default function TarefasEdit(props) {
  const history = useHistory();
  const classes = useStyles();

  const [professorId, setProfessorId] = useState('');
  const [turmaId, setTumaId] = useState('');
  const [dataTarefa, setDataTarefa] = useState('');
  const [materiaId, setMateriaId] = useState('');
  const [tema, setTema] = useState('');
  const [descricao, setDescricao] = useState('');


  const tarefaId = props.location.state?.id;
  const readOnly = props.location.state?.readOnly;

  useEffect(loadTarefa, [tarefaId]);

  function loadTarefa() {
    if (tarefaId) {
      api
        .get(`/tarefas/${tarefaId}`)
        .then((response) => {
          setProfessorId(response.data.professor_id);
          setTumaId(response.data.turma_id);
          setDataTarefa(response.data.data_input);
          setMateriaId(response.data.materia_id);
          setTema(response.data.tema);
          setDescricao(response.data.descricao);
        });
    }
  }

  /**
   * Load professores.
   */
  const [professores, setProfessores] = useState([]);
  useEffect(() => {
    api.get('/professores')
      .then(response => {
        const itens = response.data.map(item => {
          return {...item, name: item.tratamento_nome}
        })
        setProfessores(itens);
      });
    
  }, []);

  /**
   * Load turmas.
   */
  const [turmas, setTurmas] = useState([]);
  useEffect(() => {
    api.get('/turmas')
      .then(response => {
        const itens = response.data.map(item => {
          return {...item, name: item.descricao}
        })
        setTurmas(itens);
      });
    
  }, []);

  /**
   * Load materias.
   */
  const [materias, setMaterias] = useState([]);
  useEffect(() => {
    api.get('/materias')
      .then(response => {
        const itens = response.data.map(item => {
          return {...item, name: item.descricao}
        })
        setMaterias(itens);
      });
    
  }, []);

  async function handleNew(e) {
    e.preventDefault();

    const data = {
      id: tarefaId,
      professorId,
      turmaId,
      dataTarefa,
      materiaId,
      tema,
      descricao
    };

    try {
      if (tarefaId) {
        await api.put(`/tarefas/${tarefaId}`, data);
        NotificationManager.success('Tarefa alterada com sucesso!');
      } else {
        await api.post('/tarefas', data);
        NotificationManager.success('Tarefa cadastrada com sucesso!');
      }
      history.push('/tarefas');
    } catch(err) {
      alert('Erro ao cadastrar tarefa, tente novamente.');
    }
  }

  function navigate(url) {
    history.push(url);
  }


  return (
        <>
          <div className="header-container">
            <h1>Tarefa</h1>
            <ArrowBackIcon
              className="header-icon"  
              fontSize="large"
              onClick={() => navigate("/tarefas")}/>
          </div>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleNew}>
            <SelectField 
              id="professor-id" 
              label="Professor"
              value={professorId}
              options={professores}
              onChange={e => setProfessorId(e.target.value)}
              disabled={readOnly}/>
            <SelectField 
              id="turma-id" 
              label="Turma"
              value={turmaId}
              options={turmas}
              onChange={e => setTumaId(e.target.value)}
              disabled={readOnly}/>
            <SelectField 
              id="materia-id" 
              label="Matéria"
              value={materiaId}
              options={materias}
              onChange={e => setMateriaId(e.target.value)}
              disabled={readOnly}/>
            <DateField 
              id="data-id" 
              label="Data"
              value={dataTarefa}
              onChange={e => setDataTarefa(e.target.value)}
              disabled={readOnly}/>
            <TextField 
              id="tema-id" 
              label="Tema"
              value={tema}
              onChange={e => setTema(e.target.value)}
              disabled={readOnly}/>
            <TextArea 
              id="descricao-id" 
              label="Descrição" 
              height={150}
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              disabled={readOnly}/>
            <Button 
              type="submit" 
              className={classes.btn} 
              variant="contained" 
              color="primary"
              disabled={readOnly}>
                Salvar
            </Button>
          </form>
        </>
  );
}