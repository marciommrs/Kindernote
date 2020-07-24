import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './styles.css';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function SelectField(props) {
  const classes = useStyles();

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel 
            htmlFor={props.id}
            shrink={true}>
            {props.label}
          </InputLabel>
          <Select
            native
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            label={props.label}
            variant="outlined"
            disabled={props.disabled}
          >
            <option aria-label="None" value="-1" />
            {props.options?.map((item) => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))}
          </Select>
        </FormControl>
    </>
  );
}