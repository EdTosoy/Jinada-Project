import React from "react";

import "./Track.scss";
export default function Track() {
  return (
    <div className="track">
      <h2 className="heading"> TRACK YOUR PARCEL</h2>
      <div className="row">
        <input type="text" placeholder="Your Track Number" />
        <button>
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
