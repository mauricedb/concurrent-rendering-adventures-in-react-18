import logo from '../logo.svg';

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="React logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Concurrent Adventures
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/users">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/primes">
                Prime Numbers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
