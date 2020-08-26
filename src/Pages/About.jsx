import React from "react";

import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <h2 className="heading">ABOUT US</h2>
      <div className="about-wrapper">
        BJC Group of Companies specializes in the whole spectrum of cargo
        handling. Packing and crating, insurance, Customs clearance, domestic
        movement, surface, sea, and air freightage, storage and warehousing, and
        distribution business, business process outsourcing and Specialty
        project cargo handling
        <div className="button-wrapper">
          <button>LEARN MORE</button>
          <div className="copy-right">
            &copy;CopyRights Jinada 2020, all Rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
