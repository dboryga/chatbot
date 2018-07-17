import React from 'react';

//img
import Dashboard from './img/dashboard';
import MyBots from './img/myBots';
import Statistics from './img/statistics';
import Help from './img/help';


const NavItem = (props) => {
  return (
    <div class="nav-item">
        
        <p>{props.text}</p>
    </div>
  );
}

export default NavItem;