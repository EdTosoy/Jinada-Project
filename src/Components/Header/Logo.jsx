import React from "react";

import logoSVG from "./media/logo.svg";
import "./Logo.scss";
export default function Logo() {
  return (
    <div className="logo">
      <img src={logoSVG} alt="logo" />
    </div>
  );
}
