import React, { useState } from "react";

export const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChangeInput = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClickSearch = () => {
    onSearch(search);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search launch..." onChange={onChangeInput} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClickSearch} >🔍</button>
      </div>
    </div>
  );
};
