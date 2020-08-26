import React from "react";

import logoSVG from "./logo.svg";
import "./Logo.scss";
export default function Logo() {
  return (
    <div className="logo">
      <img src={logoSVG} alt="logo" />
    </div>
  );
}
