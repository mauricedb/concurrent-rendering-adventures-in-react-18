import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import atomium from './atomium.jpg';

import { NavBar } from './components/NavBar';
import { PrimeNumbers } from './components/primes/PrimeNumbers';
import { UserList } from './components/users/UserList';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/primes">
            <PrimeNumbers />
          </Route>
          <Route path="/">
            <div className="row">
              <h2 className="text-center mt-5">
                Concurrent Rendering Adventures in React 18
              </h2>
              <img className="g-5" src={atomium} alt="React Brussels" />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
