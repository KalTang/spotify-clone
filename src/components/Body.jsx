import React from "react";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src="https://tinyurl.com/y6won8rw" alt="Discover Weekly" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
