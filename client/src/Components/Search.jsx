import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Search.css";

const Search = () => {
  const [srcTxt, setSrcTxt] = useState("");
  useEffect(() => {
    console.log(srcTxt);
  }, [srcTxt]);
  return (
    <div className="searchOuter">
      <div className="searchBar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Bar"
          value={srcTxt}
          onChange={(e) => {
            setSrcTxt(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
