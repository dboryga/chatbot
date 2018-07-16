import React from 'react';
import {Link} from 'react-router-dom';

//css
import './Landing.css'

const Landing = () => {
  return (
    <div id="landing">
      <h1>LANDING PAGE</h1>
      
      <h2>
        <Link to="/panel">Panel</Link>
      </h2>
      
    </div>
  );
}

export default Landing;