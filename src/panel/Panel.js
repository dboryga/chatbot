import React from 'react';

//components
import Navigation from './Navigation';
import Content from './Content';

//css
import './Panel.css';

const Panel = () => {
  return (
    <div id="container">
      <div id="panel">

        <Navigation />
        <Content />
        
      </div>
    </div>
  );
}

export default Panel;