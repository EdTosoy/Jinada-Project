import React from "react";

import "./Information.scss";
export default function Information() {
  return (
    <ul className="information">
      <li>
        <ion-icon name="location-sharp"></ion-icon>
        <p> Jinada Frieght Management Center, Neil Road, Indonesia. </p>
      </li>
      <li>
        <ion-icon name="chatbox-ellipses-sharp"></ion-icon>
        <p> Infor@Jinada.express </p>
      </li>
      <li>
        <ion-icon name="call-sharp"></ion-icon>
        <p> +632 823 9901 </p>
      </li>
      <li>
        <ion-icon name="time-sharp"></ion-icon>
        <p> Business Hours : Monday to Saturday 9am – 6pm </p>
      </li>
    </ul>
  );
}
