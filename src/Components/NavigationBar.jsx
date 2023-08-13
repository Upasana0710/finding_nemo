import React from 'react';
import  '../styles/Navbar.css';
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div className="NavBar">
        <Link to="/Lostitems" style={{ textDecoration: 'none' }}><div className="Nav_items di">Discovered items</div></Link>
         <div className="Nav_items"><a href="mailto:esperanceweb24@gmail.com" target="blank">Contact us</a></div>
    </div>
  )
}

export default NavigationBar
