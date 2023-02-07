import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import LoginPage from './components/login';



export default function App() {

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
  })
);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LoginPage></LoginPage>
    </div>
  );
}