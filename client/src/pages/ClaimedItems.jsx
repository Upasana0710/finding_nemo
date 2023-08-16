import React from "react";
import NavBar from "../Components/NavBar";
import Search from "../Components/Search";
import ListItems from "../Components/ListItem";
import "../styles/Card.css";

const ClaimedItems = () => {
  return (
    <div className="lostCard">
      <NavBar />
      <Search />
      <ListItems />
    </div>
  );
};

export default ClaimedItems;
