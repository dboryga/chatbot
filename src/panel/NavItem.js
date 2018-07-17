import React from "react";
import ReactSVG from "react-svg";

const NavItem = props => {
  let namesMap = {
    Dashboard: "img/icons/dashboard.svg",
    "My Chatbots": "img/icons/folder.svg",
    Statistics: "img/icons/statistics.svg",
    Help: "img/icons/help.svg",
    Logout: "img/icons/logout.svg"
  };

  return (
    <div class="nav-item">
      <ReactSVG path={namesMap[props.text]} />
      <p>{props.text}</p>
    </div>
  );
};

export default NavItem;
