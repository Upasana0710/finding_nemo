import React from "react";
import "../styles/Home.css";
import Button from "../Components/Button";
import img from "../assets/l&f.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
const HomeCard = () => {
  return (
    <div className="HomeCard">
    <div className="Cardimg">
        <img src={img} width="60%" />
    </div>
      <div className="Cardb">
      <img src={logo} width="30%" />
        <div className="hbtn">
        <Link to="/Founditems" style={{ textDecoration: 'none' }}><Button button="Item Found" /></Link>
        <Link to="/Lostitems" style={{ textDecoration: 'none' }}><Button button="Items Lost" /></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
