import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={{ background: '#0f172a', color: '#fff' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
          ArthaPath
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#e2e8f0', fontWeight: 500 })}>
            Home
          </NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#e2e8f0', fontWeight: 500 })}>
                Dashboard
              </NavLink>
              <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#e2e8f0', fontWeight: 500 })}>
                Profile
              </NavLink>
              <button type="button" className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
