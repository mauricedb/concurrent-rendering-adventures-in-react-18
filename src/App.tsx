import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/users">Users</Route>
          <Route path="/primes">Primes</Route>
          <Route path="/">Home</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
