import React from 'react';
import {Switch, Route } from 'react-router-dom';

  
import HomePage from './pages/homepage/homepage.component';
import './App.css';


const IphonePage = () =>(
  <div>
    <h1> Iphone Page </h1>
  </div>
)

function App() {
  return (
    <div>
     <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/iphones' component={IphonePage} />
    </Switch>
    </div>
  );
}

export default App;
