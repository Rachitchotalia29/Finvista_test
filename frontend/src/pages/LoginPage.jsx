import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const LoginPage = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const result = await login(form);

    if (result.success) {
      const redirectTo = location.state?.from?.pathname || '/dashboard';
      navigate(redirectTo, { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '480px' }}>
      <div className="card" style={{ padding: '3rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Welcome back
        </h2>
        <p className="text-muted" style={{ textAlign: 'center' }}>
          Log in to continue building your retirement roadmap.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem', marginTop: '2rem' }}>
          <div>
            <label htmlFor="email" className="text-muted">
              Email address
            </label>
            <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password" className="text-muted">
              Password
            </label>
            <input id="password" name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          </div>
          {error && <p style={{ color: '#dc2626', margin: 0 }}>{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Signing you in…' : 'Login'}
          </button>
        </form>
        <p className="text-muted" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          Don&apos;t have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
