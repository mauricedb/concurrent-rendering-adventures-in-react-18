import { useRoutes } from 'react-router';
import { PrimeNumbers } from './primes/PrimeNumbers';
import { UserList } from './users/UserList';
import parliament from './parliament.jpg';

export function AppRoutes() {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <div className="row">
          <h2 className="text-center mt-5">
            Concurrent Rendering Adventures in React 18
          </h2>
          <img
            className="g-5"
            src={parliament}
            alt="House of Parliament, London"
          />
        </div>
      ),
    },
    { path: '/users', element: <UserList /> },
    { path: '/primes', element: <PrimeNumbers /> },
  ]);

  return element;
}
