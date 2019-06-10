import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import MapContainer from './MapContainer.js';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
});

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.handleEarthquakesChange = this.handleEarthquakesChange.bind(this);
    this.state = {
      earthquakes: [],
    };
  }

  handleEarthquakesChange(updatedEarthquakes){
    console.log("handling change");
    this.setState({earthquakes: updatedEarthquakes})
  }

  render() {

    const { classes } = this.props;
    const earthquakes = this.state.earthquakes;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navbar></Navbar>
        <Sidebar 
          earthquakes={this.state.earthquakes} 
          onEarthquakesChange={this.handleEarthquakesChange}>
        </Sidebar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <MapContainer
            earthquakes={this.state.earthquakes}
          >
          </MapContainer>
        </main>
      </div>
    );
  }
}

export default (withStyles(styles)(App));