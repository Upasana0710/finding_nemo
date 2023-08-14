import React from "react";
import "../../styles/Lost/NavBar.css";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <div className="navBar">
      <Link to="/" className="cursor-pointer title">
        {props.data.title}
      </Link>
      <div>
        <div
          className="color-blue cursor-pointer navItem"
          onClick={() => props.updateItemLost()}
        >
          {props.data.uno}
        </div>
        <div
          className="color-blue cursor-pointer navItem
        "
          onClick={() =>
            (window.location.href = "mailto:iampriyanshukumar.2003@gmail.com")
          }
        >
          {props.data.dos}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
