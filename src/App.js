import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


//Components
import Landing from './landing/Landing';
import Panel from './panel/Panel';


class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/panel" component={Panel} />
          <Route render={() => ( <Redirect to="/"/> )}/> {/*Incorrect route */}
        </Switch>
      </Router>

    );
  }
}

export default App;