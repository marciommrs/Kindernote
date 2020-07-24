import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
    marginBottom: '20px',
    marginRight: '10px',
  },
  icon: {
    cursor: 'pointer',
    color: '#2ec5e6',
    backgroundColor: 'white',
    borderRadius: '50%'
  },
  title: {
    color: '#676767',
  }
}));

export default function HeaderDashboard(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          {props.title}
        </Typography>
        {props.handleBack ?
          <ArrowBackIcon
            className={classes.icon}
            fontSize="large"
            onClick={props.handleBack} />
          : null
        }

        {props.handleAdd ?
          <AddCircleOutlineIcon
            className={classes.icon}
            fontSize="large"
            onClick={props.handleAdd} />
          : null
        }
      </div>
    </>
  );
}