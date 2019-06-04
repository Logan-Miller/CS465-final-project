import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    border: green,
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
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;