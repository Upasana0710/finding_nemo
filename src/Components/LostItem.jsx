import React from "react";
import "../styles/LostItems.css";
import LostItem from "../assets/sample-lost.jpeg";

const ListItem = () => {
  return (
    <div className="itemContainer">
      <img src={LostItem} alt="" width={200} />
    </div>
  );
};

export default ListItem;
