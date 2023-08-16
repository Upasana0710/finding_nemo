import React from "react";
import "../../styles/Lost/Items.css";
import LostItem from "../../assets/sample-lost.jpeg";

const ListItem = () => {
  return (
    <div className="itemContainer">
      <img src={LostItem} alt="" width={200} />
      <div className="innerContainer">
        <div>Item Name</div>
        <div>Item Description</div>
      </div>
    </div>
  );
};

export default ListItem;
