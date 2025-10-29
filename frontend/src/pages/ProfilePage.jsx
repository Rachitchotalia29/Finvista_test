import { useEffect, useState } from 'react';
import api from '../services/api.js';
import { useAuth } from '../context/AuthContext.jsx';

const ProfilePage = () => {
  const { user, refreshProfile } = useAuth();
  const [form, setForm] = useState({
    name: '',
    age: 30,
    retirementAge: 60,
    monthlyIncome: 50000,
    monthlyInvestment: 10000,
    currentSavings: 500000,
    riskProfile: 'moderate',
    location: 'India',
    dependents: 0
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || '',
        age: user.age || 30,
        retirementAge: user.retirementAge || 60,
        monthlyIncome: user.monthlyIncome || 50000,
        monthlyInvestment: user.monthlyInvestment || 10000,
        currentSavings: user.currentSavings || 500000,
        riskProfile: user.riskProfile || 'moderate',
        location: user.location || 'India',
        dependents: user.dependents || 0
      });
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'riskProfile' || name === 'name' || name === 'location' ? value : Number(value)
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    setError('');
    try {
      await api.put('/users/me', form);
      setStatus('Profile updated successfully.');
      await refreshProfile();
    } catch (err) {
      console.error('Profile update failed:', err);
      setError(err.response?.data?.message || 'Unable to update profile.');
    }
  };

  return (
    <div className="container" style={{ padding: '3rem 0 5rem', maxWidth: '720px' }}>
      <h1 className="section-title">Your financial profile</h1>
      <p className="text-muted">Keep your details current so our AI can tailor recommendations around your unique goals.</p>
      <div className="card" style={{ marginTop: '2rem' }}>
        <form onSubmit={handleSubmit} className="grid" style={{ gap: '1.25rem' }}>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <label>
              <span className="text-muted">Full name</span>
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              <span className="text-muted">Location</span>
              <input name="location" value={form.location} onChange={handleChange} required />
            </label>
            <label>
              <span className="text-muted">Dependents</span>
              <input type="number" min="0" name="dependents" value={form.dependents} onChange={handleChange} />
            </label>
            <label>
              <span className="text-muted">Risk profile</span>
              <select name="riskProfile" value={form.riskProfile} onChange={handleChange}>
                <option value="conservative">Conservative</option>
                <option value="moderate">Moderate</option>
                <option value="aggressive">Aggressive</option>
              </select>
            </label>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <label>
              <span className="text-muted">Current age</span>
              <input type="number" min="18" max="70" name="age" value={form.age} onChange={handleChange} />
            </label>
            <label>
              <span className="text-muted">Target retirement age</span>
              <input type="number" min="40" max="75" name="retirementAge" value={form.retirementAge} onChange={handleChange} />
            </label>
            <label>
              <span className="text-muted">Monthly income (₹)</span>
              <input type="number" min="0" step="1000" name="monthlyIncome" value={form.monthlyIncome} onChange={handleChange} />
            </label>
            <label>
              <span className="text-muted">Monthly investment (₹)</span>
              <input type="number" min="0" step="500" name="monthlyInvestment" value={form.monthlyInvestment} onChange={handleChange} />
            </label>
            <label>
              <span className="text-muted">Current retirement savings (₹)</span>
              <input type="number" min="0" step="5000" name="currentSavings" value={form.currentSavings} onChange={handleChange} />
            </label>
          </div>
          <button className="btn btn-primary" type="submit" style={{ justifySelf: 'flex-start' }}>
            Save changes
          </button>
          {status && <p style={{ color: '#15803d', margin: 0 }}>{status}</p>}
          {error && <p style={{ color: '#dc2626', margin: 0 }}>{error}</p>}
        </form>
      </div>

      {user?.planHistory?.length ? (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Recent plan snapshots</h2>
          <div className="grid" style={{ gap: '1rem' }}>
            {user.planHistory.slice(0, 3).map((plan, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem' }}>
                <p style={{ color: '#2563eb', fontWeight: 600 }}>{new Date(plan.createdAt || Date.now()).toLocaleString()}</p>
                <p style={{ marginTop: '1rem', color: '#1f2937' }}>{plan.summary}</p>
                {plan.aiInsights?.length ? (
                  <ul style={{ marginTop: '1rem', paddingLeft: '1.1rem' }}>
                    {plan.aiInsights.map((insight, idx) => (
                      <li key={idx} style={{ color: '#334155', marginBottom: '0.5rem' }}>
                        {insight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProfilePage;
