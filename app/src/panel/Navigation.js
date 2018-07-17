import React from 'react';

//components
import NavItem from './NavItem';

//img
import Logo from './img/logo';
import Dashboard from './img/dashboard';
import MyBots from './img/myBots';
import Statistics from './img/statistics';
import Help from './img/help';


const Navigation = () => {
  return (
    <nav>
        <div class="logo nav-item">
            <Logo />
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