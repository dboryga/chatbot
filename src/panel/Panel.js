import React from 'react';
import ReactSVG from "react-svg";

//components
import NavItem from './NavItem';
import Topbar from './Topbar';

//css
import './Panel.css';

const Panel = () => {
  return (
    <div id="container">
      <div id="panel">

        <nav>
          <div class="logo">
            <ReactSVG path="img/icons/logo.svg" />
            <p>Chatbot</p>
          </div>
          <div id="navOptions">
              <NavItem text="Dashboard"/>
              <NavItem text="My Chatbots"/>
              <NavItem text="Statistics"/>
              <NavItem text="Help"/>
              <NavItem text="Logout"/>
          </div>
        </nav>

        <article id="content">
        
          <Topbar />
          
          

        </article>
      </div>
    </div>
  );
}

export default Panel;