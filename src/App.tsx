import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

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
          <Route path="/">Home</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
