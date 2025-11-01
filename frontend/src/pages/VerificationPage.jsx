import { useState } from 'react';

const mockProjects = [
  {
    id: 1,
    name: 'Amazon Rainforest Water Conservation',
    status: 'verified',
    verificationScore: 98,
    submittedDate: '2023-11-15',
    verifiedDate: '2024-01-15',
    region: 'South America',
    developer: 'Brazilian Water Initiative',
    verificationHistory: [
      {
        stage: 'Initial Submission',
        date: '2023-11-15',
        status: 'completed',
        data: {
          waterSaved: '2.5M liters/year',
          affectedArea: '5,000 hectares',
          methodology: 'ISO 14046 Water Footprint',
          documents: ['Project Plan', 'Baseline Study', 'Monitoring Protocol']
        }
      },
      {
        stage: 'Technical Review',
        date: '2023-12-01',
        status: 'completed',
        auditor: 'Dr. Maria Santos',
        findings: 'Methodology approved. Baseline data verified against satellite imagery.',
        dataValidation: {
          waterMetrics: 'Verified',
          impactArea: 'Verified',
          methodology: 'Approved'
        }
      },
      {
        stage: 'Field Audit',
        date: '2023-12-20',
        status: 'completed',
        auditor: 'EcoAudit International',
        findings: 'On-site inspection confirmed project implementation. Water monitoring systems operational.',
        photos: ['Site Visit 1', 'Monitoring Equipment', 'Community Engagement'],
        measurements: {
          actualWaterSaved: '2.6M liters/year',
          varianceFromBaseline: '+4%'
        }
      },
      {
        stage: 'Final Verification',
        date: '2024-01-15',
        status: 'completed',
        auditor: 'Global Water Certification Board',
        result: 'VERIFIED - 98% Score',
        certifications: ['ISO 14046', 'Gold Standard Water', 'UN SDG 6 Aligned'],
        credits: {
          issued: 5000,
          available: 5000,
          retired: 0
        }
      }
    ]
  },
  {
    id: 2,
    name: 'Mekong River Basin Protection',
    status: 'in-review',
    verificationScore: null,
    submittedDate: '2024-01-05',
    verifiedDate: null,
    region: 'Asia',
    developer: 'Mekong Water Council',
    verificationHistory: [
      {
        stage: 'Initial Submission',
        date: '2024-01-05',
        status: 'completed',
        data: {
          waterSaved: '8M liters/year',
          affectedArea: '12,000 hectares',
          methodology: 'Water Benefit Standard',
          documents: ['Project Plan', 'Baseline Study', 'Stakeholder Engagement']
        }
      },
      {
        stage: 'Technical Review',
        date: '2024-01-12',
        status: 'in-progress',
        auditor: 'Dr. Chen Wei',
        preliminaryFindings: 'Methodology under review. Additional baseline data requested.',
        requestedInfo: [
          'Historical water flow data (5 years)',
          'Detailed impact assessment',
          'Community consultation records'
        ]
      },
      {
        stage: 'Field Audit',
        date: 'Pending',
        status: 'pending',
        scheduledDate: '2024-02-15'
      },
      {
        stage: 'Final Verification',
        date: 'Pending',
        status: 'pending'
      }
    ]
  }
];

const VerificationPage = () => {
  const [selectedProject, setSelectedProject] = useState(mockProjects[0]);
  const [activeTab, setActiveTab] = useState('history');

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return '#22c55e';
      case 'in-progress': return '#f59e0b';
      case 'pending': return '#94a3b8';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return '✓';
      case 'in-progress': return '⏳';
      case 'pending': return '○';
      default: return '○';
    }
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
            Project Verification Dashboard
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            Complete transparency into every project's verification journey
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem' }}>
        <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
          <div className="stat-card">
            <div className="stat-value">150</div>
            <div className="stat-label">Total Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">142</div>
            <div className="stat-label">Verified</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">8</div>
            <div className="stat-label">In Review</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">98%</div>
            <div className="stat-label">Avg. Score</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '2rem' }}>
          <div>
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                Projects
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {mockProjects.map(project => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    style={{
                      padding: '1rem',
                      border: `2px solid ${selectedProject.id === project.id ? 'var(--primary-blue)' : 'var(--neutral-200)'}`,
                      borderRadius: '0.75rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: selectedProject.id === project.id ? 'rgba(8, 145, 178, 0.05)' : 'white'
                    }}
                  >
                    <div style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      {project.name}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      {project.status === 'verified' ? (
                        <span className="badge badge-verified">✓ Verified</span>
                      ) : (
                        <span className="badge badge-pending">⏳ In Review</span>
                      )}
                      <span className="badge badge-primary">{project.region}</span>
                    </div>
                    {project.verificationScore && (
                      <div style={{ fontWeight: '600', color: 'var(--verified-green)', fontSize: '0.9rem' }}>
                        Score: {project.verificationScore}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    {selectedProject.name}
                  </h2>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {selectedProject.status === 'verified' ? (
                      <span className="badge badge-verified">✓ Verified</span>
                    ) : (
                      <span className="badge badge-pending">⏳ In Review</span>
                    )}
                    <span className="badge badge-primary">{selectedProject.region}</span>
                  </div>
                </div>
                {selectedProject.verificationScore && (
                  <div style={{
                    padding: '1rem 1.5rem',
                    background: 'linear-gradient(135deg, #22c55e, #10b981)',
                    color: 'white',
                    borderRadius: '0.75rem',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: '2rem'
                  }}>
                    {selectedProject.verificationScore}%
                    <div style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: '500' }}>
                      Verification Score
                    </div>
                  </div>
                )}
              </div>

              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                padding: '1rem',
                background: 'var(--neutral-50)',
                borderRadius: '0.5rem'
              }}>
                <div>
                  <div className="text-muted text-sm">Developer</div>
                  <div style={{ fontWeight: '600' }}>{selectedProject.developer}</div>
                </div>
                <div>
                  <div className="text-muted text-sm">Submitted</div>
                  <div style={{ fontWeight: '600' }}>{selectedProject.submittedDate}</div>
                </div>
                <div>
                  <div className="text-muted text-sm">Region</div>
                  <div style={{ fontWeight: '600' }}>{selectedProject.region}</div>
                </div>
                <div>
                  <div className="text-muted text-sm">Verified Date</div>
                  <div style={{ fontWeight: '600' }}>
                    {selectedProject.verifiedDate || 'Pending'}
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="tabs">
                <div 
                  className={`tab ${activeTab === 'history' ? 'active' : ''}`}
                  onClick={() => setActiveTab('history')}
                >
                  Verification History
                </div>
                <div 
                  className={`tab ${activeTab === 'data' ? 'active' : ''}`}
                  onClick={() => setActiveTab('data')}
                >
                  Original Data
                </div>
                <div 
                  className={`tab ${activeTab === 'audit' ? 'active' : ''}`}
                  onClick={() => setActiveTab('audit')}
                >
                  Audit Results
                </div>
              </div>

              {activeTab === 'history' && (
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                    Verification Timeline
                  </h3>

                  <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                    <div style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '0.5rem',
                      bottom: '0.5rem',
                      width: '2px',
                      background: 'var(--neutral-300)'
                    }} />

                    {selectedProject.verificationHistory.map((stage, index) => (
                      <div key={index} style={{ marginBottom: '2rem', position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          left: '-1.75rem',
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '50%',
                          background: getStatusColor(stage.status),
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '1rem',
                          border: '3px solid white',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                          {getStatusIcon(stage.status)}
                        </div>

                        <div style={{
                          padding: '1.25rem',
                          background: stage.status === 'completed' ? 'rgba(34, 197, 94, 0.05)' : 
                                     stage.status === 'in-progress' ? 'rgba(245, 158, 11, 0.05)' : 
                                     'var(--neutral-50)',
                          borderRadius: '0.75rem',
                          border: `1px solid ${stage.status === 'completed' ? 'rgba(34, 197, 94, 0.2)' : 
                                                stage.status === 'in-progress' ? 'rgba(245, 158, 11, 0.2)' : 
                                                'var(--neutral-200)'}`
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                              {stage.stage}
                            </h4>
                            <span className="badge" style={{
                              background: stage.status === 'completed' ? 'rgba(34, 197, 94, 0.1)' :
                                         stage.status === 'in-progress' ? 'rgba(245, 158, 11, 0.1)' :
                                         'rgba(148, 163, 184, 0.1)',
                              color: stage.status === 'completed' ? '#15803d' :
                                    stage.status === 'in-progress' ? '#b45309' :
                                    '#64748b'
                            }}>
                              {stage.status === 'completed' ? 'Completed' :
                               stage.status === 'in-progress' ? 'In Progress' :
                               'Pending'}
                            </span>
                          </div>

                          <div className="text-muted text-sm" style={{ marginBottom: '0.75rem' }}>
                            {stage.date}
                          </div>

                          {stage.auditor && (
                            <div style={{ marginBottom: '0.75rem' }}>
                              <span className="text-muted text-sm">Auditor: </span>
                              <span style={{ fontWeight: '600' }}>{stage.auditor}</span>
                            </div>
                          )}

                          {stage.findings && (
                            <div style={{ 
                              padding: '1rem',
                              background: 'white',
                              borderRadius: '0.5rem',
                              marginBottom: '0.75rem',
                              border: '1px solid var(--neutral-200)'
                            }}>
                              <div className="text-sm font-semibold" style={{ marginBottom: '0.5rem' }}>
                                Findings:
                              </div>
                              <div className="text-sm">{stage.findings}</div>
                            </div>
                          )}

                          {stage.preliminaryFindings && (
                            <div style={{ 
                              padding: '1rem',
                              background: 'white',
                              borderRadius: '0.5rem',
                              marginBottom: '0.75rem',
                              border: '1px solid var(--neutral-200)'
                            }}>
                              <div className="text-sm font-semibold" style={{ marginBottom: '0.5rem' }}>
                                Preliminary Findings:
                              </div>
                              <div className="text-sm">{stage.preliminaryFindings}</div>
                            </div>
                          )}

                          {stage.requestedInfo && (
                            <div style={{ 
                              padding: '1rem',
                              background: 'rgba(245, 158, 11, 0.1)',
                              borderRadius: '0.5rem',
                              border: '1px solid rgba(245, 158, 11, 0.3)'
                            }}>
                              <div className="text-sm font-semibold" style={{ marginBottom: '0.5rem' }}>
                                Requested Information:
                              </div>
                              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                {stage.requestedInfo.map((info, i) => (
                                  <li key={i} className="text-sm">{info}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {stage.data && (
                            <div style={{ 
                              display: 'grid',
                              gridTemplateColumns: 'repeat(2, 1fr)',
                              gap: '0.75rem',
                              marginTop: '0.75rem'
                            }}>
                              {Object.entries(stage.data).map(([key, value]) => (
                                <div key={key} style={{
                                  padding: '0.75rem',
                                  background: 'white',
                                  borderRadius: '0.5rem',
                                  border: '1px solid var(--neutral-200)'
                                }}>
                                  <div className="text-xs text-muted">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </div>
                                  <div className="text-sm font-semibold">
                                    {Array.isArray(value) ? value.join(', ') : value}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {stage.dataValidation && (
                            <div style={{ 
                              display: 'flex',
                              gap: '0.75rem',
                              marginTop: '0.75rem',
                              flexWrap: 'wrap'
                            }}>
                              {Object.entries(stage.dataValidation).map(([key, value]) => (
                                <span key={key} className="badge badge-verified">
                                  ✓ {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                                </span>
                              ))}
                            </div>
                          )}

                          {stage.result && (
                            <div style={{
                              padding: '1rem',
                              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
                              borderRadius: '0.5rem',
                              marginTop: '0.75rem',
                              border: '2px solid rgba(34, 197, 94, 0.3)'
                            }}>
                              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#15803d' }}>
                                {stage.result}
                              </div>
                            </div>
                          )}

                          {stage.certifications && (
                            <div style={{ marginTop: '0.75rem' }}>
                              <div className="text-sm font-semibold" style={{ marginBottom: '0.5rem' }}>
                                Certifications:
                              </div>
                              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {stage.certifications.map((cert, i) => (
                                  <span key={i} className="badge badge-verified">
                                    🏆 {cert}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {stage.credits && (
                            <div style={{ 
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3, 1fr)',
                              gap: '0.75rem',
                              marginTop: '0.75rem'
                            }}>
                              <div style={{
                                padding: '0.75rem',
                                background: 'white',
                                borderRadius: '0.5rem',
                                textAlign: 'center',
                                border: '1px solid var(--neutral-200)'
                              }}>
                                <div className="text-xs text-muted">Issued</div>
                                <div className="font-bold">{stage.credits.issued.toLocaleString()}</div>
                              </div>
                              <div style={{
                                padding: '0.75rem',
                                background: 'white',
                                borderRadius: '0.5rem',
                                textAlign: 'center',
                                border: '1px solid var(--neutral-200)'
                              }}>
                                <div className="text-xs text-muted">Available</div>
                                <div className="font-bold">{stage.credits.available.toLocaleString()}</div>
                              </div>
                              <div style={{
                                padding: '0.75rem',
                                background: 'white',
                                borderRadius: '0.5rem',
                                textAlign: 'center',
                                border: '1px solid var(--neutral-200)'
                              }}>
                                <div className="text-xs text-muted">Retired</div>
                                <div className="font-bold">{stage.credits.retired.toLocaleString()}</div>
                              </div>
                            </div>
                          )}

                          {stage.scheduledDate && (
                            <div className="alert alert-info" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                              <strong>Scheduled:</strong> {stage.scheduledDate}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'data' && (
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                    Original Submission Data
                  </h3>
                  <div className="alert alert-info">
                    This section shows the original data submitted by the project developer before any audits or verifications.
                  </div>
                  {selectedProject.verificationHistory[0]?.data && (
                    <div className="grid grid-2" style={{ marginTop: '1rem' }}>
                      {Object.entries(selectedProject.verificationHistory[0].data).map(([key, value]) => (
                        <div key={key} className="card">
                          <div className="text-muted text-sm" style={{ marginBottom: '0.5rem' }}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                            {Array.isArray(value) ? (
                              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                {value.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                            ) : value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'audit' && (
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                    Audit Results Summary
                  </h3>
                  <div className="alert alert-info">
                    Comprehensive audit findings from independent third-party verifiers.
                  </div>

                  {selectedProject.verificationHistory
                    .filter(stage => stage.auditor)
                    .map((stage, index) => (
                      <div key={index} className="card" style={{ marginTop: '1rem' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>
                          {stage.stage}
                        </h4>
                        <div style={{ marginBottom: '1rem' }}>
                          <span className="text-muted">Auditor: </span>
                          <span style={{ fontWeight: '600' }}>{stage.auditor}</span>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                          <span className="text-muted">Date: </span>
                          <span style={{ fontWeight: '600' }}>{stage.date}</span>
                        </div>
                        {stage.findings && (
                          <div style={{
                            padding: '1rem',
                            background: 'var(--neutral-50)',
                            borderRadius: '0.5rem',
                            marginTop: '1rem'
                          }}>
                            <div className="font-semibold" style={{ marginBottom: '0.5rem' }}>
                              Findings:
                            </div>
                            <div>{stage.findings}</div>
                          </div>
                        )}
                        {stage.result && (
                          <div style={{
                            padding: '1rem',
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
                            borderRadius: '0.5rem',
                            marginTop: '1rem',
                            border: '2px solid rgba(34, 197, 94, 0.3)',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            color: '#15803d'
                          }}>
                            {stage.result}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
