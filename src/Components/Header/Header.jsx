import React from "react";

import Logo from "./Logo";
import Brand from "./Brand";
import Navigation from "./Navigation";
import Mail from "./Mail";
export default function Header() {
  return (
    <header>
      <Logo />
      <div className="white"></div>
      <Brand />
      <Navigation />
      <Mail />
    </header>
  );
}
