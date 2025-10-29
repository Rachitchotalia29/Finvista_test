import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.svg?url';

const benefits = [
  {
    title: 'AI-guided investments',
    description: 'Personalised recommendations using Google Gemini tuned for Indian markets.'
  },
  {
    title: 'Tax-optimised planning',
    description: 'Maximise deductions under Sections 80C, 80D, and 80CCD with actionable insights.'
  },
  {
    title: 'All-in-one dashboard',
    description: 'Track retirement corpus, SIPs, EPF/PPF, and emergency fund health in one place.'
  }
];

const testimonials = [
  {
    name: 'Anita Sharma',
    title: 'IT Professional, Bengaluru',
    quote:
      'ArthaPath helped me rebalance my mutual fund SIPs and create a clear roadmap for retiring at 55 with confidence.'
  },
  {
    name: 'Rajiv Patel',
    title: 'Entrepreneur, Ahmedabad',
    quote: 'The AI recommendations are practical, Indian market aware, and easy to implement. Huge value add!'
  }
];

const LandingPage = () => {
  return (
    <main>
      <section className="container" style={{ display: 'grid', gap: '3rem', padding: '4rem 0', alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <span className="badge">The Indian AI Retirement Copilot</span>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.1, fontWeight: 800 }}>
            Retire with confidence. Let AI craft your path to financial freedom.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '600px' }}>
            ArthaPath blends smart planning, long-term investing, and Gemini-powered guidance tailored to Indian goals.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/signup">
              Start Planning Now
            </Link>
            <a className="btn btn-secondary" href="#features">
              Explore Features
            </a>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>₹12 Cr+</h3>
              <p className="text-muted">Retirement corpus planned</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>18K+</h3>
              <p className="text-muted">Indian investors empowered</p>
            </div>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Retirement planning illustration" style={{ width: '100%', maxWidth: '520px' }} />
        </div>
      </section>

      <section id="features" style={{ background: '#0f172a', color: '#e2e8f0', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#f8fafc' }}>
            Why Indians choose ArthaPath
          </h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card" style={{ background: '#1e293b', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
                <h3 style={{ color: '#f1f5f9' }}>{benefit.title}</h3>
                <p style={{ color: '#94a3b8' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0' }}>
        <h2 className="section-title">Loved by urban professionals nationwide</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card">
              <p style={{ fontStyle: 'italic', color: '#334155' }}>&ldquo;{testimonial.quote}&rdquo;</p>
              <div style={{ marginTop: '1.5rem' }}>
                <strong>{testimonial.name}</strong>
                <p className="text-muted">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #2563eb, #0ea5e9)', color: '#fff' }}>
        <div className="container" style={{ padding: '3.5rem 0', textAlign: 'center', display: 'grid', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Ready to design your retirement journey?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Join thousands who use our AI to balance equity, debt, gold, and tax-saving instruments in harmony.
          </p>
          <Link className="btn btn-secondary" to="/signup">
            Create free account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
