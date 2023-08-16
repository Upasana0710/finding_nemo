import React from 'react'

const rough = () => {
  return (
    <div className="FoundContainer">
      <div className="FoundImg">
        <div className="upload">
          <img src={upload} alt="upload_icon" />
        </div>
        <button className="upload_btn">Upload Image</button>
      </div>
      <div className="FoundDetails">
        <p>Enter the details of the found item! </p>
        <form method="POST" className="form1">
          <input className="name" name="Finder_name" placeholder="Your name" />
          <input
            type="number"
            className="inputField"
            name="finder_phno"
            placeholder="Contact number"
          />

          <input
            type="text"
            className="inputField"
            name="finder_email"
            placeholder="Email"
          />


          <div className="found_location">
            <input
              type="text"
              className="inputField location"
              name="spot_location"
              placeholder="Location ? "
            />
            <LocationOnIcon className="licon"/>
          </div>

          <input
            type="text"
            className="inputField "
            name="item_descp"
            placeholder="Description of item"
          />

          <input type="submit" value="Submit" className="FoundSubmit" />
        </form>
      </div>
    </div>
  )
}

export default rough
