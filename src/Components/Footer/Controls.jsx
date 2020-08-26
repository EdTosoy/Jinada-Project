import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Controls.scss";
export default function Controls() {
  let history = useHistory();
  let location = useLocation();

  let nextPage;
  switch (location.pathname) {
    case "/home":
      nextPage = "/track";
      break;
    case "/track":
      nextPage = "/pricing";
      break;
    case "/pricing":
      nextPage = "/contact";
      break;
    case "/contact":
      nextPage = "/about";
      break;
    case "/about":
      nextPage = "/home";
      break;
    default:
      break;
  }
  const forwardHandler = () => {
    history.push(`${nextPage}`);
  };
  const backHandler = () => {
    history.goBack();
  };
  return (
    <div className="controls">
      <div className="next" onClick={forwardHandler}>
        <ion-icon name="chevron-forward-sharp" />
      </div>
      <div className="prev" onClick={backHandler}>
        <ion-icon name="chevron-back-sharp" />
      </div>
    </div>
  );
}
