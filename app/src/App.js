import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom';


//Components
import Landing from './landing/Landing';
import Panel from './panel/Panel';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/panel" component={Panel} />
        </div>
      </Router>

    );
  }
}

export default App;