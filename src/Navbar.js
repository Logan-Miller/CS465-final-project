import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    border: green,
  },
}));

function Navbar() {
  const classes = useStyles();

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Earthquake mapper
            </Typography>
        <Button color="inherit" onClick={handleClick}>About</Button>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;