import React from "react";
import "../styles/Home.css";
import Button from "../Components/Button";
import img from "../assets/l&f.png";
import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import IoTlogo from "../assets/logo.jpg"; 

const HomeCard = () => {
  return (
    <div className="homeContainer">
    <div className="homeContainer_left">
        <img src={img} width="90%" draggable="false" alt="Card"/>
    </div>
      <div className="homeContainer_right">
      <img src={IoTlogo} width="10%" draggable="false" alt="Card"/>
      <img src={logo} width="100%" draggable="false" alt="Card "/>
        <div className="button">
        <Link to="/Lostitems" style={{ textDecoration: 'none' }}>
          <Button button="Let's get started!" className="homeButton"/></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
