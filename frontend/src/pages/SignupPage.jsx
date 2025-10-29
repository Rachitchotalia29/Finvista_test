import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const SignupPage = () => {
  const { signup, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const result = await signup(form);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '520px' }}>
      <div className="card" style={{ padding: '3rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Create your ArthaPath account
        </h2>
        <p className="text-muted" style={{ textAlign: 'center' }}>
          Start planning a stress-free retirement with AI insights created for Indian investors.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem', marginTop: '2rem' }}>
          <div>
            <label htmlFor="name" className="text-muted">
              Full name
            </label>
            <input id="name" name="name" placeholder="Priya Verma" value={form.name} onChange={handleChange} required />
          </div>
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
            <input id="password" name="password" type="password" placeholder="Create a strong password" value={form.password} onChange={handleChange} required />
          </div>
          {error && <p style={{ color: '#dc2626', margin: 0 }}>{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Creating account…' : 'Sign up'}
          </button>
        </form>
        <p className="text-muted" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
