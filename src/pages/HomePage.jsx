
import React from 'react';
import logo from '../assets/logo.jpg';
import '../styles/Home.css'
import HomeCard from '../Components/HomeCard';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='HomeScreen'>
      {/* <div ><img src={logo} className="icon" width="100px"/></div> */}
      <HomeCard/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,69.3C384,107,480,181,576,213.3C672,245,768,235,864,208C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
       </div> )
}


export default HomePage;
