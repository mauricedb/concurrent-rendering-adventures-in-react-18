import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { NavBar } from './components/NavBar';
import { PrimeNumbers } from './components/PrimeNumbers';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/users">Users</Route>
          <Route path="/primes">
            <PrimeNumbers />
          </Route>
          <Route path="/">Home</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
