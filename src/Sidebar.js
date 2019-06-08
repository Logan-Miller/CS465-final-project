import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const axios = require('axios');
const drawerWidth = 250;

const styles = theme => ({
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
});

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      earthquakes: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const self = this;

    axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson")
      .then(function(response) {
        console.log(response.data.features);
        self.setState({
          earthquakes: response.data.features
        })
      })
      .catch(function(err) {
        console.log(err.message);
      });

  }

  render() {
    const { classes } = this.props;
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <div>
                <button onClick={this.handleClick}>Its a button</button>
            </div>
            <List>
               {
                 this.state.earthquakes.map((earthquake, index) => (
                   <ListItem key = {index}> {earthquake.properties.place}</ListItem>
                 ))
               }

            </List>
        </Drawer>
    );
  }
}

export default (withStyles(styles)(Sidebar));