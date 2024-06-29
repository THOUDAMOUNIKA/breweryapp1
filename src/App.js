import logo from './logo.svg';
import { NavLink, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SearchPage from './components/SearchPage';
import './App.css';
import BreweryDetails from './components/BreweryDetails';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Link for Home Component */}
            <li className="nav-item">
              <NavLink className="nav-link" to="">Home</NavLink>
            </li>
            
            {/* Link for Login Component */}
            <li className="nav-item">
              <NavLink className="nav-link" to="login">Login</NavLink>
            </li>
            {/* Link for SearchPage Component */}
            <li className="nav-item">
              <NavLink className="nav-link" to="search">SearchPage</NavLink>
            </li>
          </ul>
        </div>
      </div>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='signup' element={<Signup /> } />
        <Route path="/brewery/:id" element={<BreweryDetails />} />
      </Routes>
    </div>
  );
}

export default App;