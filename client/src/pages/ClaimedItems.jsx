import React, { useState } from "react";

import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import Search from "../Components/Search";
import ListItems from "../Components/ListItem";
import "../styles/Card.css";

const ClaimedItems = () => {
  const [lostState, setLostState] = useState(false);
  const updateItemLost = () => {
    setLostState(!lostState);
  };

  return (
    <div
      className="claimCard"
      style={{ overflow: lostState ? "hidden" : "auto" }}
    >
      <NavBar updateItemLost={updateItemLost} />
      <Search />
      {lostState && <Card updateItemLost={updateItemLost} />}
      <ListItems />
    </div>
  );
};

export default ClaimedItems;
