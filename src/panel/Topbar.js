import React from 'react';
import ReactSVG from "react-svg";

//img
import Profil from './img/profil.png'

const Topbar = () => {
  return (
    <header>
        <div className="topbarItem">
            <ReactSVG path="img/icons/search.svg" />
        </div>

        <div className="topbarItem">
            <ReactSVG path="img/icons/notifications.svg" />
        </div>

        <div className="topbarItem">
            <ReactSVG path="img/icons/messages.svg" />
        </div>
        
        <div className="topbarItem">
            <img src={Profil} alt="Profil" />
        </div>
    </header>
  );
}

export default Topbar;