import React from "react";
import {NavLink} from 'react-router-dom';
import ReactSVG from "react-svg";

const NavItem = props => {
  /*Path to svg*/
  let img = `img/icons/${props.name.toLowerCase()}.svg`;

  /*Link path to component*/
  let link = `/panel/${props.name.toLowerCase()}`;

  return (
      <NavLink to={link} className="nav-item" activeClassName="active">
         <ReactSVG path={img} />
         <p>{props.name}</p>
      </NavLink>
  );
};

export default NavItem;
