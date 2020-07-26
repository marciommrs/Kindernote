import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white'
  },
}));

export default function TextField(props) {
  const classes = useStyles();

  return (
    <>
      <MaterialTextField 
          id={props.id}
          label={props.label}
          variant="outlined"
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          type={props.type}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.root}/>
    </>
  );
}