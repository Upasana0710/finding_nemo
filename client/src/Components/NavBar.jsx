import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Tooltip } from "@mui/material";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <Link
        to="/"
        className="cursor-pointer title "
        style={{ textDecoration: "none" }}
      >
        {props.data.title}
      </Link>
      <div>

      <Link
        to="/Founditems"
        className="cursor-pointer title "
        style={{ textDecoration: "none" }}
      >
        <div
          className="color-blue cursor-pointer navItem"
        >
          {props.data.tres}
        </div></Link>
        <div
          className="color-blue cursor-pointer navItem"
          onClick={() => props.updateItemLost()}
        >
          {props.data.uno}
        </div>
        <div
          className="color-blue cursor-pointer navItem"
          onClick={() =>
            (window.location.href = "mailto:iampriyanshukumar.2003@gmail.com")
          }
        >
          {props.data.dos}
        </div>
        <Tooltip title="Claimed items " arrow>
        <Link to="/ClaimedItems" style={{ textDecoration: 'none' }}><BookmarkAddedIcon className="color-blue cursor-pointer navItem"/></Link></Tooltip>
      </div>
    </div>
  );
};

export default NavBar;
