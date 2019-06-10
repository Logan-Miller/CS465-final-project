import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    border: green,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Earthquake mapper
            </Typography>
        <Button className={classes.menuButton} color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;