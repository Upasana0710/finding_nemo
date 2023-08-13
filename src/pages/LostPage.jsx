import React, { useState } from "react";
import "../styles/LostCard.css";
import LostCard from "../Components/LostCard";
import LostNavBar from "../Components/LostNavbar";
import ListLostItems from "../Components/ListLostItems.jsx";

const LostPage = () => {
  const NavData = {
    title: "App Name",
    uno: "Lost Something ?",
    dos: "Contact Us",
  };
  const [lostState, setLostState] = useState(false);
  const updateItemLost = () => {
    setLostState(!lostState);
  };

  return (
    <div className="lostCard">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#019aff"
          fill-opacity="1"
          d="M0,64L48,64C96,64,192,64,288,101.3C384,139,480,213,576,234.7C672,256,768,224,864,224C960,224,1056,256,1152,229.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <LostNavBar data={NavData} updateItemLost={updateItemLost} />
      {lostState && <LostCard updateItemLost={updateItemLost} />}
      <ListLostItems />
    </div>
  );
};

export default LostPage;
