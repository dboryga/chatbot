import React, {Component} from 'react';
import ReactSVG from "react-svg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

//components
import NavItem from './NavItem';
import Topbar from './Topbar';
import Dashboard from './content/Dashboard';
import Chatbots from './content/Chatbots';
import Statistics from './content/Statistics';
import Help from './content/Help';

//css
import './Panel.css';

class Panel extends Component {
  render() {
    return (
      <Router>
        <div id="container">
          <div id="panel">
            <nav>
              <Link to='/'>
                  <div className="logo">
                      <ReactSVG path="img/icons/logo.svg" />
                      <p>Chatbot</p>
                  </div>
              </Link>
              <div id="navOptions">
                  <NavItem name="Dashboard"/>
                  <NavItem name="Chatbots"/>
                  <NavItem name="Statistics"/>
                  <NavItem name="Help"/>
                  <NavItem name="Logout"/>
              </div>
            </nav>
            <article id="content">
            
              <Topbar />

              <Switch>
                <Route path="/panel/dashboard" component={Dashboard} />
                <Route path="/panel/chatbots" component={Chatbots} />
                <Route path="/panel/statistics" component={Statistics} />
                <Route path="/panel/help" component={Help} />
              </Switch>
                

            </article>
          </div>
        </div>
      </Router>
    );
  }
}

export default Panel;