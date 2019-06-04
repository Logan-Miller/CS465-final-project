import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
    sidebar: {
        width: "7000px",
        flexShrink: 0,
    },
    toolbar: theme.mixins.toolbar,
}));

function Sidebar() {
    const classes = useStyles();

    return (
        <Drawer variant="permanent" className="sidebar">
            <div className={classes.toolbar}/>
            <div>   
                <ul>
                    <li>This</li>
                    <li>Will</li>
                    <li>Be</li>
                    <li>Where</li>
                    <li>Our</li>
                    <li>Data</li>
                    <li>Go</li>
                </ul>
            </div>
        </Drawer>
    );
}

export default Sidebar;