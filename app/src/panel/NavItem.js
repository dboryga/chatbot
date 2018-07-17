import React from 'react';

//img
import Dashboard from './img/dashboard';
import MyBots from './img/myBots';
import Statistics from './img/statistics';
import Help from './img/help';


const NavItem = (props) => {
  switch(props.text) {
    case 'Dashboard':
      return (
        <div class="nav-item">
            <Dashboard />
            <p>{props.text}</p>
        </div>
      );
    break;
    case 'My Chatbots':
    return (
      <div class="nav-item">
          <MyBots />
          <p>{props.text}</p>
      </div>
    );
  break;
    default:
      return (
        <div class="nav-item">
            <p>{props.text}</p>
        </div>
      );
  }
  
}

export default NavItem;