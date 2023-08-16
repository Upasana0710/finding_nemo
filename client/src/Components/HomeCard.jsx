import React, { useEffect } from "react";
import "../styles/Home.css";
import Button from "../Components/Button";
import img from "../assets/l&f.png";
import { Link } from "react-router-dom";
import homeImage from "../assets/Group.png";
import IoTlogo from "../assets/logo.jpg";

const HomeCard = () => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") window.location.href = "/lost";
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="homeContainer">
      <div className="homeContainer_left">
        <img src={img} width="90%" draggable="false" alt="Card" />
      </div>
      <div className="homeContainer_right">
        <img src={IoTlogo} width="10%" draggable="false" alt="Card" />
        <img src={homeImage} width="100%" draggable="false" alt="Card " />
        <div className="button">
          <Link to="/lost" style={{ textDecoration: "none" }}>
            <Button button="Let's get started!" className="homeButton" />
            <span style={{ textDecoration: "none", color: "rgb(80,80,80)" }}>
              Press Enter
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
