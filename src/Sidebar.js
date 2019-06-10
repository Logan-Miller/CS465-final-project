import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const axios = require('axios');
const drawerWidth = 300;

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
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  toolbar: theme.mixins.toolbar,
});

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMagnitude: "1.0",
      selectedTimeframe: "hour"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const self = this;
    console.log(this.props);
    axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/" 
    + this.state.selectedMagnitude + "_" + this.state.selectedTimeframe + ".geojson")
      .then(function(response) {
        self.props.onEarthquakesChange(response.data.features);
      })
      .catch(function(err) {
        console.log(err.message);
      });

  }

  handleChange(event) {
    if(event.target.name === "magnitude"){
      this.setState({
        selectedMagnitude: event.target.value
      })  
    }

    else if(event.target.name === "timeframe") {
      this.setState({
        selectedTimeframe: event.target.value
      })  
    } 
  }

  render() {

    const { classes } = this.props;
    const earthquakes = this.props.earthquakes;
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
            <button onClick={this.handleClick}>View Earthquakes</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Magnitude</FormLabel>
            <RadioGroup
              aria-label="Magnitude"
              name="magnitude"
              className={classes.group}
              defaultValue="1.0"
              onChange={this.handleChange}
            >
              <FormControlLabel value="1.0" control={<Radio />} label="1.0+" />
              <FormControlLabel value="2.5" control={<Radio />} label="2.5+" />
              <FormControlLabel value="4.5" control={<Radio />} label="4.5+" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl} >
            <FormLabel component="legend" >Time frame</FormLabel>
            <RadioGroup
              aria-label="Timeframe"
              name="timeframe"
              className={classes.group}
              defaultValue="hour"
              onChange={this.handleChange}
            >
              <FormControlLabel value="hour" control={<Radio color="primary"/>} label="1 Hour" />
              <FormControlLabel value="day" control={<Radio color="primary"/>} label="1 Day" />
              <FormControlLabel value="week" control={<Radio color="primary"/>} label="1 Week" />
            </RadioGroup>
          </FormControl>
        </div>
        <List>
            {
              earthquakes.map((earthquake, index) => (
              <ListItem key = {index}> 
                <ListItemText
                  primary= {"Magnitude: " + earthquake.properties.mag}
                  secondary={"Location: " + earthquake.properties.title}
                />
              </ListItem>
              ))
            }
        </List>
      </Drawer>
    );
  }
}

export default (withStyles(styles)(Sidebar));