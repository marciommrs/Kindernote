import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

export default function TextField(props) {

  return (
    <>
      <MaterialTextField 
          id={props.id}
          label={props.label}
          variant="outlined"/>
    </>
  );
}