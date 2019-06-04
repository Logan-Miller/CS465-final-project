import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function Navbar() {
    return (
        <AppBar positon="fixed">
            <Toolbar>
                <h2>Earthquake Mapper</h2>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
