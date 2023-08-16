import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Tooltip } from "@mui/material";
import { useLocation } from "react-router-dom";

const NavBar = (props) => {
  const pathName = useLocation().pathname;

  return (
    <div className="navBar">
      <Link to="/" className="cursor-pointer title ">
        Finding Nemo
      </Link>
      <div>
        <Link to="/found" className="cursor-pointer navItem color-blue ">
          Found Something ?
        </Link>
        {pathName === "/lost" && (
          <div
            className="color-blue cursor-pointer navItem"
            onClick={() => props.updateItemLost()}
          >
            Lost Something ?
          </div>
        )}
        {pathName === "/claimed" && (
          <Link to="/lost" className="cursor-pointer navItem color-blue ">
            Lost Something ?
          </Link>
        )}
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
