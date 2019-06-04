import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function Sidebar() {

    const classes = useStyles();

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
            <ListItem>This</ListItem>
            <ListItem>Is</ListItem>
            <ListItem>Where</ListItem>
            <ListItem>Our</ListItem>
            <ListItem>Data</ListItem>
            <ListItem>Will</ListItem>
            <ListItem>Go</ListItem>
        </List>
      </Drawer>
  );
}

export default Sidebar;