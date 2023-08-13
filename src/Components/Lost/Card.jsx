import React from "react";
import "../../styles/Lost/Card.css";
import upload from "../../assets/gallery.png";
import CloseIcon from "@mui/icons-material/Close";

const LostCard = (props) => {
  return (
    <div className="lostContainerOuter">
      <div className="lostContainer">
        <div className="closeIcon" onClick={() => props.updateItemLost()}>
          <CloseIcon />
        </div>
        <div className="uploadImg">
          <img src={upload} alt="logo" width={100} />
          <button className="btnGraphic">Upload Image</button>
        </div>
        <div className="divider"></div>
        <div className="details">
          <form
            className="formSubmit"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              name=""
              id=""
              className="inputField"
              placeholder="Name"
            />
            <input
              type="text"
              name=""
              id=""
              className="inputField"
              placeholder="Item Name"
            />
            <input
              type="text"
              name=""
              id=""
              className="inputField"
              placeholder="Item Description"
            />
            <input
              type="number"
              name=""
              id=""
              className="inputField noAppear"
              placeholder="Contact Number"
            />
            <input
              type="text"
              name=""
              id=""
              className="inputField"
              placeholder="Email"
            />

            <input
              type="text"
              name=""
              id=""
              className="inputField"
              placeholder="Lost Location"
            />
            <input
              type="datetime-local"
              name=""
              id=""
              className="inputField"
              placeholder="Lost Date & Time"
            />

            <div className="submitBtn">
              <button className="btnGraphic">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LostCard;
