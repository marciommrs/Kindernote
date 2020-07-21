import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

import './styles.css';

export default function TextArea(props) {
  //const height = props.height;

  return (
    <>
      <MaterialTextField 
          id={props.id}
          label={props.label}
          variant="outlined" 
          // InputProps={{
          //   style: {
          //     height,
          //   },
          // }}
          value={props.value}
          onChange={props.onChange}
          rows={4}
          multiline />
    </>
  );
}