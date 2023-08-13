import React, { useState } from "react";

import Card from "../Components/Lost/Card";
import NavBar from "../Components/Lost/NavBar";
import ListItem from "../Components/Lost/ListItem";
import "../styles/Lost/Card.css";

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
      <NavBar data={NavData} updateItemLost={updateItemLost} />
      {lostState && <Card updateItemLost={updateItemLost} />}
      {/* <LostSearch /> */}
      <ListItem />
    </div>
  );
};

export default LostPage;
