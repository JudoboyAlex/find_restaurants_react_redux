import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:city" component={RestaurantsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
