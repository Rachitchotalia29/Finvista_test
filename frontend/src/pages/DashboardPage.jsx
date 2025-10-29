import { useEffect, useState } from 'react';
import api from '../services/api.js';
import { useAuth } from '../context/AuthContext.jsx';

const riskOptions = [
  { value: 'conservative', label: 'Conservative' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'aggressive', label: 'Aggressive' }
];

const DashboardPage = () => {
  const { user, refreshProfile } = useAuth();
  const [form, setForm] = useState({
    currentAge: user?.age || 30,
    retirementAge: user?.retirementAge || 60,
    monthlyIncome: user?.monthlyIncome || 50000,
    monthlyInvestment: user?.monthlyInvestment || 10000,
    currentSavings: user?.currentSavings || 500000,
    inflationRate: 0.06,
    riskProfile: user?.riskProfile || 'moderate'
  });
  const [planResult, setPlanResult] = useState(null);
  const [investmentInput, setInvestmentInput] = useState({
    lumpSumAmount: 0,
    investmentHorizonYears: 10
  });
  const [investmentIdeas, setInvestmentIdeas] = useState([]);
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [loadingIdeas, setLoadingIdeas] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    refreshProfile();
  }, [refreshProfile]);

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        currentAge: user.age,
        retirementAge: user.retirementAge,
        monthlyIncome: user.monthlyIncome,
        monthlyInvestment: user.monthlyInvestment,
        currentSavings: user.currentSavings,
        riskProfile: user.riskProfile
      }));
    }
  }, [user]);

  const handlePlanChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'riskProfile' ? value : Number(value)
    }));
  };

  const handleInvestmentChange = (event) => {
    const { name, value } = event.target;
    setInvestmentInput((prev) => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const handlePlanSubmit = async (event) => {
    event.preventDefault();
    setLoadingPlan(true);
    setError('');
    try {
      const { data } = await api.post('/planner/plan', form);
      setPlanResult(data);
      await refreshProfile();
    } catch (err) {
      console.error('Plan generation failed:', err);
      setError(err.response?.data?.message || 'Unable to generate retirement plan.');
    } finally {
      setLoadingPlan(false);
    }
  };

  const fetchInvestmentIdeas = async () => {
    setLoadingIdeas(true);
    setError('');
    try {
      const { data } = await api.post('/planner/investments', {
        ...investmentInput,
        riskProfile: form.riskProfile,
        monthlyInvestment: form.monthlyInvestment
      });
      setInvestmentIdeas(data.aiSuggestions);
    } catch (err) {
      console.error('Investment suggestions failed:', err);
      setError(err.response?.data?.message || 'Unable to fetch investment suggestions.');
    } finally {
      setLoadingIdeas(false);
    }
  };

  const lastPlan = user?.planHistory?.[0];

  return (
    <div className="container" style={{ padding: '3rem 0 5rem' }}>
      <h1 className="section-title">Namaste, {user?.name?.split(' ')[0] || 'Investor'}!</h1>
      <p className="text-muted" style={{ maxWidth: '640px' }}>
        Fine-tune your retirement goals, evaluate your projected corpus, and receive fresh AI insights crafted for the Indian market.
      </p>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: '2rem', gap: '2rem' }}>
        <div className="card">
          <h2 style={{ margin: '0 0 1rem' }}>Retirement plan inputs</h2>
          <form onSubmit={handlePlanSubmit} className="grid" style={{ gap: '1rem' }}>
            <label>
              <span className="text-muted">Current age</span>
              <input type="number" name="currentAge" min="18" max="70" value={form.currentAge} onChange={handlePlanChange} />
            </label>
            <label>
              <span className="text-muted">Retirement age goal</span>
              <input type="number" name="retirementAge" min="40" max="75" value={form.retirementAge} onChange={handlePlanChange} />
            </label>
            <label>
              <span className="text-muted">Monthly income (₹)</span>
              <input type="number" name="monthlyIncome" min="0" step="1000" value={form.monthlyIncome} onChange={handlePlanChange} />
            </label>
            <label>
              <span className="text-muted">Monthly investment budget (₹)</span>
              <input type="number" name="monthlyInvestment" min="0" step="500" value={form.monthlyInvestment} onChange={handlePlanChange} />
            </label>
            <label>
              <span className="text-muted">Existing retirement savings (₹)</span>
              <input type="number" name="currentSavings" min="0" step="5000" value={form.currentSavings} onChange={handlePlanChange} />
            </label>
            <label>
              <span className="text-muted">Expected inflation (decimal)</span>
              <input type="number" name="inflationRate" min="0" step="0.01" value={form.inflationRate} onChange={handlePlanChange} />
            </label>
            <label>
              <span className="text-muted">Risk profile</span>
              <select name="riskProfile" value={form.riskProfile} onChange={handlePlanChange}>
                {riskOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <button className="btn btn-primary" type="submit" disabled={loadingPlan}>
              {loadingPlan ? 'Analysing…' : 'Generate plan'}
            </button>
          </form>
          {error && <p style={{ color: '#dc2626', marginTop: '1rem' }}>{error}</p>}
        </div>

        <div className="card" style={{ display: 'grid', gap: '1.25rem' }}>
          <h2 style={{ margin: 0 }}>AI-powered corpus projection</h2>
          {planResult ? (
            <>
              <div style={{ background: '#eff6ff', padding: '1rem 1.25rem', borderRadius: '1rem' }}>
                <p style={{ margin: 0, fontWeight: 600, color: '#1d4ed8' }}>{planResult.summary}</p>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
                <Metric label="Years to retire" value={planResult.projection.yearsToRetirement} />
                <Metric label="Projected corpus" value={`₹${planResult.projection.totalFutureCorpus.toLocaleString('en-IN')}`} />
                <Metric label="Inflation-adjusted" value={`₹${planResult.projection.inflationAdjustedCorpus.toLocaleString('en-IN')}`} />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.75rem' }}>AI suggestions</h3>
                <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                  {planResult.aiSuggestions.map((suggestion, index) => (
                    <li key={index} style={{ marginBottom: '0.75rem', color: '#334155' }}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : lastPlan ? (
            <>
              <p className="text-muted">Your last generated plan snapshot:</p>
              <div style={{ background: '#eff6ff', padding: '1rem 1.25rem', borderRadius: '1rem' }}>
                <p style={{ margin: 0, color: '#1d4ed8' }}>{lastPlan.summary}</p>
              </div>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Generate a fresh plan to see updated numbers and insights.
              </p>
            </>
          ) : (
            <p className="text-muted">Fill in your details and generate a plan to view projections here.</p>
          )}
        </div>
      </div>

      <div className="card" style={{ marginTop: '2.5rem', display: 'grid', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0 }}>Investment idea generator</h2>
            <p className="text-muted" style={{ margin: 0 }}>
              Explore diversified strategies spanning SIPs, debt, and alternative assets tailored to your risk appetite.
            </p>
          </div>
          <button className="btn btn-secondary" type="button" onClick={fetchInvestmentIdeas} disabled={loadingIdeas}>
            {loadingIdeas ? 'Fetching ideas…' : 'Get suggestions'}
          </button>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <label>
            <span className="text-muted">Lump sum to invest (₹)</span>
            <input type="number" name="lumpSumAmount" min="0" step="5000" value={investmentInput.lumpSumAmount} onChange={handleInvestmentChange} />
          </label>
          <label>
            <span className="text-muted">Investment horizon (years)</span>
            <input type="number" name="investmentHorizonYears" min="1" max="40" value={investmentInput.investmentHorizonYears} onChange={handleInvestmentChange} />
          </label>
        </div>
        {investmentIdeas.length > 0 && (
          <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
            {investmentIdeas.map((idea, index) => (
              <li key={index} style={{ marginBottom: '0.75rem', color: '#1f2937' }}>
                {idea}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Metric = ({ label, value }) => (
  <div style={{ background: '#f8fafc', borderRadius: '1rem', padding: '1rem' }}>
    <p className="text-muted" style={{ margin: 0 }}>{label}</p>
    <p style={{ margin: '0.5rem 0 0', fontWeight: 700, fontSize: '1.25rem' }}>{value}</p>
  </div>
);

export default DashboardPage;
