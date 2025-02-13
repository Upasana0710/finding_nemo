import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Tooltip } from "@mui/material";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <Link to="/" className="cursor-pointer title ">
        Finding Nemo
      </Link>
      <div>
        <Link to="/found" className="cursor-pointer navItem color-blue ">
          Found Something ?
        </Link>

        <div
          className="color-blue cursor-pointer navItem"
          onClick={() => props.updateItemLost()}
        >
          Lost Something ?
        </div>
        <Tooltip title="Claimed items" arrow>
          <Link to="/claimed" style={{ textDecoration: "none" }}>
            <BookmarkAddedIcon className="color-blue cursor-pointer navItem" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default NavBar;
