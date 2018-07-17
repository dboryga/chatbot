import React from 'react';
import ReactSVG from "react-svg";
//components
import NavItem from './NavItem';

const Navigation = () => {
  return (
    <nav>
        <div class="logo nav-item">
        <ReactSVG path="img/icons/logo.svg" />
            <p>Chatbot</p>
        </div>

        <NavItem text="Dashboard"/>
        <NavItem text="My Chatbots"/>
        <NavItem text="Statistics"/>
        <NavItem text="Help"/>
        <NavItem text="Logout"/>
    </nav>
  );
}

export default Navigation;