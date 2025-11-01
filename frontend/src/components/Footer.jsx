const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: 'white',
      padding: '3rem 0 1.5rem',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1.5rem' }}>💧</span>
              AqVerium
            </h3>
            <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
              Building trust in water credit trading through transparent verification and secure marketplace solutions.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Platform</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8 }}>
              <li style={{ marginBottom: '0.5rem' }}>Marketplace</li>
              <li style={{ marginBottom: '0.5rem' }}>Verification Dashboard</li>
              <li style={{ marginBottom: '0.5rem' }}>Submit Projects</li>
              <li style={{ marginBottom: '0.5rem' }}>About Us</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8 }}>
              <li style={{ marginBottom: '0.5rem' }}>Documentation</li>
              <li style={{ marginBottom: '0.5rem' }}>API Reference</li>
              <li style={{ marginBottom: '0.5rem' }}>Verification Standards</li>
              <li style={{ marginBottom: '0.5rem' }}>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8 }}>
              <li style={{ marginBottom: '0.5rem' }}>support@aqverium.com</li>
              <li style={{ marginBottom: '0.5rem' }}>Press Inquiries</li>
              <li style={{ marginBottom: '0.5rem' }}>Partnerships</li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          opacity: 0.7,
          fontSize: '0.9rem'
        }}>
          <p>&copy; 2024 AqVerium. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
