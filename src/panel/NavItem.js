import React from "react";
import {NavLink} from 'react-router-dom';
import ReactSVG from "react-svg";

const NavItem = props => {
  /*Path to imgs*/
  let imgsMap = {
    Dashboard: "img/icons/dashboard.svg",
    Chatbots: "img/icons/folder.svg",
    Statistics: "img/icons/statistics.svg",
    Help: "img/icons/help.svg",
    Logout: "img/icons/logout.svg"
  };

  /*Link path to component*/
  let link = '/panel/' + props.name.toLowerCase();

  return (
      <NavLink to={link} className="nav-item" activeClassName="active">
         <ReactSVG path={imgsMap[props.name]} />
         <p>{props.name}</p>
      </NavLink>
  );
};

export default NavItem;
