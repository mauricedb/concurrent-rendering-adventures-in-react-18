import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './components/AppRoutes';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
