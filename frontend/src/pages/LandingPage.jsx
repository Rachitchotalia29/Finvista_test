import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <section style={{
        background: 'linear-gradient(135deg, #0891b2 0%, #14b8a6 100%)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            Trust & Trade Water Credits with Confidence
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '3rem', 
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            AqVerium connects project developers, auditors, and corporate buyers through a transparent, 
            secure platform for verified water credit trading.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={user ? "/marketplace" : "/signup"}>
              <button className="btn btn-lg" style={{ 
                background: 'white', 
                color: '#0891b2',
                fontWeight: '700'
              }}>
                {user ? 'Explore Marketplace' : 'Get Started'}
              </button>
            </Link>
            <Link to="/marketplace">
              <button className="btn btn-lg btn-outline" style={{
                border: '2px solid white',
                color: 'white',
                background: 'transparent'
              }}>
                View Credits
              </button>
            </Link>
          </div>

          <div style={{ 
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '4rem auto 0'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                $2.4M+
              </div>
              <div style={{ opacity: 0.9 }}>Total Credits Traded</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                150+
              </div>
              <div style={{ opacity: 0.9 }}>Verified Projects</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                98%
              </div>
              <div style={{ opacity: 0.9 }}>Verification Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                45+
              </div>
              <div style={{ opacity: 0.9 }}>Countries</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem' }}>
            Built for Three Key Stakeholders
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            A comprehensive platform serving the entire water credit ecosystem
          </p>

          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <div className="card card-hover">
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #0891b2, #14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                🌱
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Project Developers
              </h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
                NGOs and communities can easily list water conservation projects, 
                submit documentation, and claim verified credits with our guided workflow.
              </p>
              <Link to="/submit-project">
                <button className="btn btn-primary btn-sm">
                  Submit a Project →
                </button>
              </Link>
            </div>

            <div className="card card-hover">
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #0891b2, #14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Auditors
              </h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Third-party experts can efficiently review project data, 
                conduct audits, and provide transparent verification results with full audit trails.
              </p>
              <Link to="/verification">
                <button className="btn btn-primary btn-sm">
                  View Audits →
                </button>
              </Link>
            </div>

            <div className="card card-hover">
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #0891b2, #14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                🏢
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Corporate Buyers
              </h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Companies and governments can confidently purchase verified water credits 
                with complete transparency into verification history and project impact.
              </p>
              <Link to="/marketplace">
                <button className="btn btn-primary btn-sm">
                  Browse Credits →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'linear-gradient(135deg, #f8fafc, #e0f2fe)',
        padding: '5rem 0'
      }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem' }}>
            Why Choose AqVerium?
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Building trust through transparency and security
          </p>

          <div className="grid grid-2" style={{ marginTop: '3rem', gap: '2rem' }}>
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem',
              padding: '1.5rem',
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)'
            }}>
              <div style={{ 
                fontSize: '2.5rem',
                flexShrink: 0
              }}>
                🔒
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Complete Verification Transparency
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  Every credit comes with a detailed verification history showing original data, 
                  audit results, and third-party validation - building buyer confidence.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '1.5rem',
              padding: '1.5rem',
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)'
            }}>
              <div style={{ 
                fontSize: '2.5rem',
                flexShrink: 0
              }}>
                📊
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Real-Time Market Data
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  Advanced trading dashboard with live pricing, regional filters, 
                  and quality scores to help you make informed decisions quickly.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '1.5rem',
              padding: '1.5rem',
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)'
            }}>
              <div style={{ 
                fontSize: '2.5rem',
                flexShrink: 0
              }}>
                🚀
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Streamlined Project Submission
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  Guided multi-step workflow with clear instructions and error prevention 
                  makes submitting projects simple and stress-free.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '1.5rem',
              padding: '1.5rem',
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)'
            }}>
              <div style={{ 
                fontSize: '2.5rem',
                flexShrink: 0
              }}>
                ⚡
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Fast & Secure Transactions
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  Two-step buy/sell process with secure payment handling ensures 
                  high transaction success rates and marketplace efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
            Ready to Get Started?
          </h2>
          <p className="section-subtitle">
            Join the leading platform for verified water credit trading
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {user ? (
              <>
                <Link to="/marketplace">
                  <button className="btn btn-primary btn-lg">
                    Browse Marketplace
                  </button>
                </Link>
                <Link to="/submit-project">
                  <button className="btn btn-outline btn-lg">
                    Submit Project
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <button className="btn btn-primary btn-lg">
                    Create Account
                  </button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-outline btn-lg">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
