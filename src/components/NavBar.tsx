import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const navItems = [
  { caption: 'Users', to: '/users' },
  { caption: 'Prime Numbers', to: '/primes' },
];

export function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="React logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Concurrent Adventures
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {navItems.map((navItem) => (
              <li className="nav-item">
                <NavLink
                  to={navItem.to}
                  className="nav-link"
                  activeClassName="active"
                >
                  {navItem.caption}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
