import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #0891b2, #14b8a6)',
      color: 'white',
      padding: '1rem 0',
      boxShadow: '0 4px 20px rgba(8, 145, 178, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '1.8rem' }}>💧</span>
          AqVerium
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {user ? (
            <>
              <Link 
                to="/marketplace" 
                style={{ 
                  fontWeight: isActive('/marketplace') ? '700' : '500',
                  opacity: isActive('/marketplace') ? '1' : '0.9',
                  borderBottom: isActive('/marketplace') ? '2px solid white' : 'none',
                  paddingBottom: '0.25rem'
                }}
              >
                Marketplace
              </Link>
              <Link 
                to="/verification" 
                style={{ 
                  fontWeight: isActive('/verification') ? '700' : '500',
                  opacity: isActive('/verification') ? '1' : '0.9',
                  borderBottom: isActive('/verification') ? '2px solid white' : 'none',
                  paddingBottom: '0.25rem'
                }}
              >
                Verification
              </Link>
              <Link 
                to="/submit-project" 
                style={{ 
                  fontWeight: isActive('/submit-project') ? '700' : '500',
                  opacity: isActive('/submit-project') ? '1' : '0.9',
                  borderBottom: isActive('/submit-project') ? '2px solid white' : 'none',
                  paddingBottom: '0.25rem'
                }}
              >
                Submit Project
              </Link>
              <Link 
                to="/dashboard" 
                style={{ 
                  fontWeight: isActive('/dashboard') ? '700' : '500',
                  opacity: isActive('/dashboard') ? '1' : '0.9',
                  borderBottom: isActive('/dashboard') ? '2px solid white' : 'none',
                  paddingBottom: '0.25rem'
                }}
              >
                Dashboard
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ opacity: 0.9, fontSize: '0.95rem' }}>
                  {user.name || user.email}
                </span>
                <button 
                  onClick={logout}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link 
                to="/marketplace" 
                style={{ 
                  fontWeight: isActive('/marketplace') ? '700' : '500',
                  opacity: isActive('/marketplace') ? '1' : '0.9'
                }}
              >
                Marketplace
              </Link>
              <Link to="/login">
                <button className="btn-secondary" style={{ 
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn" style={{
                  background: 'white',
                  color: '#0891b2',
                  fontWeight: '700'
                }}>
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
