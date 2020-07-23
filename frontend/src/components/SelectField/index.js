import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//import './styles.css';
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
          <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
          <Select
            native
            value={props.value}
            onChange={props.onChange}
            label={props.label}
            inputProps={{
              name: props.name,
              id: props.id,
            }}
          >
            <option aria-label="None" value="" />
            {props.options.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </Select>
        </FormControl>
      {/* <MaterialTextField 
          id={props.id}
          label={props.label}
          variant="outlined"
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          type={props.type}
          InputLabelProps={{
            shrink: true,
          }}/> */}
    </>
  );
}