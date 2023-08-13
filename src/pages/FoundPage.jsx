import React from 'react'
import '../styles/FoundCard.css';
import FoundCard from '../Components/FoundCard';
import NavigationBar from '../Components/NavigationBar';
const FoundPage = () => {
  return (
    <div className="FoundCard">
        <NavigationBar/>
        <FoundCard/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#019aff" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,101.3C384,139,480,213,576,234.7C672,256,768,224,864,224C960,224,1056,256,1152,229.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
  )
}

export default FoundPage
