import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../images/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    
  },
  appbar: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    display: 'flex',
    alignItems: 'center',
    height: '80px'
  },
  title: {
    flexGrow: 1,
    color: 'black',
    textAlign: 'center',
    fontWeight: 900,
    fontFamily: "Lucida Console, Courier, monospace",
    fontSize: 30,
    paddingLeft: '20px',
    paddingRight: ' 25px'
  
  
  },
  buttons:{
      color: "black",
      paddingLeft: '50px',
      fontSize: 16,
      '&:hover': {
       color: 'grey',
       
    },
      
  },

  toolbar:{
      maxWidth: '2000px',
      marginTop: '10px'
  },

  downloadButton:{
    color: "white",
    marginLeft: '80px',
    background: "linear-gradient(to bottom, black , orange)",
    borderRadius: '10px',
    height: '40px',
    width: '120px',
    fontSize: 18,
    '&:hover': {
        background: "linear-gradient(to bottom, black , white)",
        border: '2px solid #FFFFF',
    },
   

  }


}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
            <img width="70px" height = "70px" src = {logo} alt = "logo"></img>
          <Typography variant="h6" className={classes.title}>
            Robot AI
          </Typography>
          <h5 className={classes.buttons}>Documentation</h5>
          <h5 className={classes.buttons}>Compatibility</h5>
          <h5  className={classes.buttons}>Support</h5>
          <h5  className={classes.buttons}>Feedback</h5>
          <button className={classes.downloadButton} > Download </button>
        </Toolbar  >
      </AppBar>
    </div>
  );
}