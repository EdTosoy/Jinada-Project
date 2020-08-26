import React from "react";

import "./SocialContact.scss";

export default function SocialContact() {
  const socialAccounts = [
    {
      id: 1,
      name: "facebook",
      url: "https://www.facebook.com/jexpresscali/",
    },
    {
      id: 2,
      name: "twitter",
      url: "https://twitter.com/jinadaexpress",
    },
    {
      id: 3,
      name: "instagram",
      url: "https://www.instagram.com/jinadaexpress",
    },
  ];
  return (
    <div className="social-contact">
      <ul className="icons">
        {socialAccounts.map(({ id, name, url }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ion-icon name={`logo-${name}`}></ion-icon>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
