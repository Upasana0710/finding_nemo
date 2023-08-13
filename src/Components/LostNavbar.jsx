import React from "react";
import "../styles/LostNavbar.css";

const NavigationBar = (props) => {
  return (
    <div className="navBar">
      <div
        onClick={() => (window.location.href = "/")}
        className="cursor-pointer"
      >
        {props.data.title}
      </div>
      <div>
        <div
          className="color-blue cursor-pointer"
          onClick={() => props.updateItemLost()}
        >
          {props.data.uno}
        </div>
        <div
          className="color-blue cursor-pointer"
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
