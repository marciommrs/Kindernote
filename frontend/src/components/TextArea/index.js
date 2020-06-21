import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

import './styles.css';

export default function TextField(props) {
  const height = 100;

  return (
    <>
      <MaterialTextField 
          id={props.id}
          label={props.label}
          variant="outlined" 
          InputProps={{
            style: {
              height,
            },
          }}
          multiline />
    </>
  );
}