import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

import './styles.css';

export default function TextField(props) {

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
          }}/>
    </>
  );
}