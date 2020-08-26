import React, { useState } from "react";

import "./Loader.scss";

export default function Loader() {
  const [loaderDisplay, setLoaderDisplay] = useState(true);

  const showLoader = () => {
    setLoaderDisplay(true);

    setTimeout(() => {
      setLoaderDisplay(false);
    }, 2000);
  };
  const loaderStyle = loaderDisplay ? { display: "grid" } : { display: "none" };
  return (
    <div class="loader" style={loaderStyle} onClick={showLoader}>
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
    </div>
  );
}
