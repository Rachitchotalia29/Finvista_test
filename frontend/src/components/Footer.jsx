const Footer = () => {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8', marginTop: '4rem' }}>
      <div className="container" style={{ padding: '3rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <h3 style={{ color: '#f8fafc', marginBottom: '0.75rem' }}>ArthaPath</h3>
            <p style={{ maxWidth: '320px' }}>
              Your AI-guided companion for building a resilient retirement plan tailored to Indian financial realities.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#f8fafc' }}>Contact</h4>
            <p>Email: support@arthapath.ai</p>
            <p>Phone: +91-80-1234-5678</p>
          </div>
          <div>
            <h4 style={{ color: '#f8fafc' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
              <li>Retirement Planning 101</li>
              <li>Tax Saving with NPS</li>
              <li>Systematic Investment Strategies</li>
            </ul>
          </div>
        </div>
        <p style={{ fontSize: '0.85rem' }}>© {new Date().getFullYear()} ArthaPath Fintech Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
