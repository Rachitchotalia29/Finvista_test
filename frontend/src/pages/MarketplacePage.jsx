import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockPriceData = [
  { date: 'Jan', price: 45 },
  { date: 'Feb', price: 52 },
  { date: 'Mar', price: 48 },
  { date: 'Apr', price: 61 },
  { date: 'May', price: 58 },
  { date: 'Jun', price: 65 },
  { date: 'Jul', price: 72 },
];

const mockCredits = [
  {
    id: 1,
    name: 'Amazon Rainforest Water Conservation',
    region: 'South America',
    type: 'Conservation',
    price: 72,
    availableCredits: 5000,
    verificationScore: 98,
    status: 'verified',
    project: 'Brazilian Water Initiative',
    lastAudit: '2024-01-15'
  },
  {
    id: 2,
    name: 'Great Lakes Restoration Project',
    region: 'North America',
    type: 'Restoration',
    price: 68,
    availableCredits: 3200,
    verificationScore: 95,
    status: 'verified',
    project: 'Great Lakes Alliance',
    lastAudit: '2024-01-10'
  },
  {
    id: 3,
    name: 'Mekong River Basin Protection',
    region: 'Asia',
    type: 'Protection',
    price: 55,
    availableCredits: 8500,
    verificationScore: 92,
    status: 'verified',
    project: 'Mekong Water Council',
    lastAudit: '2024-01-20'
  },
  {
    id: 4,
    name: 'Sahel Region Water Reclamation',
    region: 'Africa',
    type: 'Reclamation',
    price: 48,
    availableCredits: 6700,
    verificationScore: 89,
    status: 'verified',
    project: 'Sahel Water Initiative',
    lastAudit: '2024-01-08'
  },
  {
    id: 5,
    name: 'Mediterranean Sea Conservation',
    region: 'Europe',
    type: 'Conservation',
    price: 78,
    availableCredits: 2100,
    verificationScore: 97,
    status: 'verified',
    project: 'Med Water Alliance',
    lastAudit: '2024-01-18'
  },
  {
    id: 6,
    name: 'Ganges River Cleanup Initiative',
    region: 'Asia',
    type: 'Cleanup',
    price: 62,
    availableCredits: 4500,
    verificationScore: 94,
    status: 'verified',
    project: 'Ganges Restoration Fund',
    lastAudit: '2024-01-12'
  }
];

const MarketplacePage = () => {
  const [selectedCredit, setSelectedCredit] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [quantity, setQuantity] = useState(100);
  const [filters, setFilters] = useState({
    region: 'all',
    type: 'all',
    minScore: 0
  });

  const filteredCredits = mockCredits.filter(credit => {
    if (filters.region !== 'all' && credit.region !== filters.region) return false;
    if (filters.type !== 'all' && credit.type !== filters.type) return false;
    if (credit.verificationScore < filters.minScore) return false;
    return true;
  });

  const handleBuyClick = (credit) => {
    setSelectedCredit(credit);
    setShowBuyModal(true);
  };

  const handlePurchase = () => {
    alert(`Successfully purchased ${quantity} credits from ${selectedCredit.name} for $${(quantity * selectedCredit.price).toLocaleString()}`);
    setShowBuyModal(false);
    setQuantity(100);
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '3rem' }}>
      <div style={{
        background: 'linear-gradient(135deg, #0891b2, #14b8a6)',
        color: 'white',
        padding: '3rem 0'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Water Credit Exchange
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            Trade verified water credits with real-time pricing and complete transparency
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem' }}>
        <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
          <div className="stat-card">
            <div className="stat-value">$72</div>
            <div className="stat-label">Current Average Price</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">30K+</div>
            <div className="stat-label">Available Credits</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">94%</div>
            <div className="stat-label">Avg. Verification Score</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">245</div>
            <div className="stat-label">Trades This Month</div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Market Price Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockPriceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#0891b2" 
                strokeWidth={3}
                name="Price per Credit ($)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem' }}>
          <div>
            <div className="card" style={{ position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                Filters
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <label>Region</label>
                <select 
                  value={filters.region}
                  onChange={(e) => setFilters({...filters, region: e.target.value})}
                >
                  <option value="all">All Regions</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label>Project Type</label>
                <select 
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                >
                  <option value="all">All Types</option>
                  <option value="Conservation">Conservation</option>
                  <option value="Restoration">Restoration</option>
                  <option value="Protection">Protection</option>
                  <option value="Reclamation">Reclamation</option>
                  <option value="Cleanup">Cleanup</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label>Min. Verification Score</label>
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={filters.minScore}
                  onChange={(e) => setFilters({...filters, minScore: parseInt(e.target.value)})}
                  style={{ width: '100%' }}
                />
                <div style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: '600' }}>
                  {filters.minScore}%
                </div>
              </div>

              <button 
                className="btn btn-secondary"
                onClick={() => setFilters({ region: 'all', type: 'all', minScore: 0 })}
                style={{ width: '100%' }}
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                Available Credits ({filteredCredits.length})
              </h2>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-sm btn-secondary">
                  Sort by Price
                </button>
                <button className="btn btn-sm btn-secondary">
                  Sort by Score
                </button>
              </div>
            </div>

            <div className="grid" style={{ gap: '1.5rem' }}>
              {filteredCredits.map(credit => (
                <div key={credit.id} className="card card-hover">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                        {credit.name}
                      </h3>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span className="badge badge-primary">
                          📍 {credit.region}
                        </span>
                        <span className="badge badge-info">
                          {credit.type}
                        </span>
                        <span className="badge badge-verified">
                          ✓ Verified
                        </span>
                      </div>
                    </div>
                    <div style={{ 
                      textAlign: 'right',
                      padding: '0.75rem 1rem',
                      background: 'linear-gradient(135deg, #0891b2, #14b8a6)',
                      color: 'white',
                      borderRadius: '0.75rem',
                      fontWeight: '700',
                      fontSize: '1.5rem'
                    }}>
                      ${credit.price}
                      <div style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: '500' }}>
                        per credit
                      </div>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'var(--neutral-50)',
                    borderRadius: '0.5rem'
                  }}>
                    <div>
                      <div className="text-muted text-sm">Available</div>
                      <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                        {credit.availableCredits.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted text-sm">Verification</div>
                      <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#22c55e' }}>
                        {credit.verificationScore}%
                      </div>
                    </div>
                    <div>
                      <div className="text-muted text-sm">Last Audit</div>
                      <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>
                        {credit.lastAudit}
                      </div>
                    </div>
                  </div>

                  <div className="text-muted text-sm" style={{ marginBottom: '1rem' }}>
                    <strong>Project:</strong> {credit.project}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleBuyClick(credit)}
                      style={{ flex: 1 }}
                    >
                      Buy Credits
                    </button>
                    <button className="btn btn-outline">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showBuyModal && selectedCredit && (
        <div className="modal-overlay" onClick={() => setShowBuyModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                Purchase Water Credits
              </h2>
              <p className="text-muted">
                {selectedCredit.name}
              </p>
            </div>

            <div className="modal-body">
              <div className="alert alert-info">
                <strong>💡 Secure Transaction:</strong> Your purchase is protected with end-to-end encryption and blockchain verification.
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label>Number of Credits</label>
                <input 
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(selectedCredit.availableCredits, parseInt(e.target.value) || 0)))}
                  min="1"
                  max={selectedCredit.availableCredits}
                />
                <div className="text-sm text-muted" style={{ marginTop: '0.5rem' }}>
                  Available: {selectedCredit.availableCredits.toLocaleString()} credits
                </div>
              </div>

              <div style={{ 
                background: 'var(--neutral-50)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span>Price per credit:</span>
                  <span style={{ fontWeight: '700' }}>${selectedCredit.price}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span>Quantity:</span>
                  <span style={{ fontWeight: '700' }}>{quantity}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span>Subtotal:</span>
                  <span style={{ fontWeight: '700' }}>${(quantity * selectedCredit.price).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--neutral-300)' }}>
                  <span>Platform Fee (2%):</span>
                  <span style={{ fontWeight: '700' }}>${((quantity * selectedCredit.price) * 0.02).toFixed(2)}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  paddingTop: '0.75rem',
                  borderTop: '2px solid var(--neutral-300)'
                }}>
                  <span>Total:</span>
                  <span style={{ color: 'var(--primary-blue)' }}>
                    ${((quantity * selectedCredit.price) * 1.02).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="alert alert-success">
                <strong>✓ Verification Score:</strong> {selectedCredit.verificationScore}% - This project meets all quality standards
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowBuyModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-success"
                onClick={handlePurchase}
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketplacePage;
