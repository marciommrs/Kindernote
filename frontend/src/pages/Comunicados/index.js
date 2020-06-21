import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Header from '../Header';
import SideBar from '../Sidebar';

import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Dropzone from '../../components/Dropzone';


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

export default function Comunicados() {
  const classes = useStyles();
  return (
        <>
          <h1>Comunicados</h1>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="title-id" label="Assunto"/>
            <TextArea id="info-id" label="Informativo"/>
            <Dropzone onFileUploaded={setSelectedFile} />
            <Button className={classes.btn} variant="contained" color="primary">Cadastrar</Button>
          </form>
        </>
  );
}