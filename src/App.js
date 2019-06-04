import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          This is where the map will go
        </Typography>
      </main>
    </div>
  );
}

export default App;