import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../assets/logo_transparent.png";
import avatarimg from "../assets/1.jpg";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  navList: {
    color: "white",
    textDecoration: "none",
    marginRight: "10px",
  },

  avatar: {
    width: "35px",
    height: "35px",
    marginRight: "10px",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  navName: {
    marginRight: "40px",
    color: "white"
  }
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <nav>
      <div className="logo">
        <img className="logo-img" src={logo} alt={logo} />
      </div>
      <ul className="nav-links">
        <Link className={classes.navList} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.navList} to="/map">
          <li>Map</li>
        </Link>
        <Link className={classes.navList} to="/:userId/favourites">
          <li>Favourites</li>
        </Link>
      </ul>
      <Avatar className={classes.avatar}>V</Avatar>
      <p className={classes.navName}>Vanessa Yeung</p>
    </nav>
  );
}
