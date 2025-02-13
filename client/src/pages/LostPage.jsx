import React, { useState } from "react";

import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/ListItem";
import Search from "../Components/Search";
import "../styles/Card.css";

const LostPage = () => {
  const [lostState, setLostState] = useState(false);
  const updateItemLost = () => {
    setLostState(!lostState);
  };

  return (
    <div
      className="lostCard"
      style={{ overflow: lostState ? "hidden" : "auto" }}
    >
      <NavBar updateItemLost={updateItemLost} />
      {lostState && <Card updateItemLost={updateItemLost} />}
      <Search />
      <ListItem />
    </div>
  );
};

export default LostPage;
