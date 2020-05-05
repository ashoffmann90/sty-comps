import React from 'react';
import styled from 'styled-components'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cards from './components/Cards';
import Forms from './components/Forms';

function App() {
  return (
    <>
      <Router>
        <Link to='/cards'>Cards</Link>
        <br/>
        <Link to='/forms'>Forms</Link>
        <Switch>
          <Route path='/cards' component={Cards}/>
          <Route path='/forms' component={Forms}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
