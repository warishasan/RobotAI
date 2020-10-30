import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "orange",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },

  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  buttons: {
    color: "black",
    paddingLeft: "50px",
    fontSize: 16,
    "&:hover": {
      color: "grey",
    },
  },

  minorHeadings: {
    fontSize: "1.2rem",
    marginLeft: "1.5rem",
  },
  downloadButton: {
    color: "white",
    marginLeft: "80px",
    background: "linear-gradient(to bottom, black , orange)",
    borderRadius: "10px",
    height: "40px",
    width: "120px",
    fontSize: 18,
    "&:hover": {
      background: "linear-gradient(to bottom, black , white)",
      border: "2px solid #FFFFF",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <img width="70px" height="70px" src={logo} alt="logo"></img>
          <h3>Robot AI </h3>
        </Typography>

        <Typography variant="h6" className={classes.title}>
          <h5 className={classes.minorHeadings}>About</h5>
          <h5 className={classes.minorHeadings}>Support</h5>
          <h5 className={classes.minorHeadings}>Buy</h5>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
