import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
export default function Navigation() {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "Track Parcel",
      path: "/track",
    },
    {
      id: 3,
      name: "Pricing",
      path: "/pricing",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/contact",
    },
    {
      id: 5,
      name: "About Us",
      path: "/about",
    },
  ];
  return (
    <ul className="navigation">
      {navLinks.map(({ id, name, path }) => (
        <li key={id}>
          <NavLink exact to={path} activeClassName="selected">
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
