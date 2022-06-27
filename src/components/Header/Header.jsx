import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar,IconButton, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/icons/Menu';

import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{background:'black'}}> 
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center" justifyContent="center">
            {/* <IconButton aria-label='app' color='inherit'>
                <Menu />
            </IconButton> */}
            <Typography variant="h5" className={classes.title}>
            Travel Advisor
            </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;