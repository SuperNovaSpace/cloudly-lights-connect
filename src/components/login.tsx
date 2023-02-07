import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <Container className={classes.form} maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
}

export default LoginPage;
