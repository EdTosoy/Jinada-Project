import React from "react";

import Information from "./Information";
import Controls from "./Controls";
export default function Footer() {
  return (
    <footer>
      <div className="green"></div>
      <Information />
      <Controls />
    </footer>
  );
}
