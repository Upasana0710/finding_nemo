import React from "react";
import "../styles/Items.css";
import LostItem from "../assets/sample-lost.jpeg";

const ListItem = () => {
  return (
    <div className="itemContainer">
      <img src={LostItem} alt="" width={200} height={300} />
      <div className="innerContainer">
        <div>Item Name</div>
        <div>Student Name</div>
        <br />
        <div>Description: Item Description</div>
        <div>Contact Email</div>
        <div>Lost Location</div>
        <div>Item Reported On</div>
      </div>
      <div className="itemFound">
        <button>Found IT</button>
      </div>
    </div>
  );
};

export default ListItem;
