import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white'
  },
}));

export default function DateField(props) {
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
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.root}/>
    </>
  );
}