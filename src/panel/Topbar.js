import React from 'react';
import ReactSVG from "react-svg";
import {NavLink} from "react-router-dom";

//img
import Profil from './img/profil.png'

const Topbar = () => {
  return (
    <header>
        <NavLink to="/panel/search" className="topbarItem" activeClassName="active">
            <ReactSVG path="img/icons/search.svg" />
        </NavLink>

        <NavLink to="/panel/notifications" className="topbarItem" activeClassName="active">
            <ReactSVG path="img/icons/notifications.svg" />
        </NavLink>

        <NavLink to="/panel/messages" className="topbarItem" activeClassName="active">
            <ReactSVG path="img/icons/messages.svg" />
        </NavLink>

        <NavLink to="/panel/profil" className="topbarItem" activeClassName="active">
            <img src={Profil} alt="Profil" />
        </NavLink>
    </header>
  );
}

export default Topbar;