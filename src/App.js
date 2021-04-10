import React from 'react';
import './App.css';
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Reservation from './pages/Reservation/Reservation'
import {Navbar} from './components';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/reservation' component = {Reservation} />
      </Switch>
    </Router>
  );
}

export default App;
