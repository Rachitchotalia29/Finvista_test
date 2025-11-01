import { useState } from 'react';

const SubmitProjectPage = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [formData, setFormData] = useState({
    step1: {
      projectName: 'Amazon Rainforest Water Conservation',
      organization: 'Brazilian Water Initiative',
      contactEmail: 'contact@brazilwater.org',
      region: 'South America',
      country: 'Brazil'
    },
    step2: {
      projectType: 'Conservation',
      waterSaved: '2500000',
      affectedArea: '5000',
      methodology: 'ISO 14046',
      startDate: '2023-06-01',
      duration: '36'
    },
    step3: {
      baselineStudy: null,
      projectPlan: null,
      monitoringProtocol: null,
      communityConsent: null,
      environmentalAssessment: null,
      financialPlan: null
    },
    step4: {
      bankName: '',
      accountNumber: '',
      routingNumber: '',
      accountType: 'checking'
    }
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    baselineStudy: null,
    projectPlan: null,
    monitoringProtocol: null,
    communityConsent: null,
    environmentalAssessment: null,
    financialPlan: null
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { number: 1, title: 'Basic Information', description: 'Project details and organization' },
    { number: 2, title: 'Technical Data', description: 'Methodology and impact metrics' },
    { number: 3, title: 'Documentation', description: 'Required documents and certifications' },
    { number: 4, title: 'Payment & Review', description: 'Banking and final review' }
  ];

  const requiredDocs = [
    {
      id: 'baselineStudy',
      name: 'Baseline Study',
      description: 'Comprehensive study of current water conditions and usage patterns',
      required: true,
      formats: '.pdf, .doc, .docx',
      maxSize: '10 MB'
    },
    {
      id: 'projectPlan',
      name: 'Project Plan',
      description: 'Detailed implementation plan with timeline and milestones',
      required: true,
      formats: '.pdf, .doc, .docx',
      maxSize: '10 MB'
    },
    {
      id: 'monitoringProtocol',
      name: 'Monitoring Protocol',
      description: 'Methods and schedule for ongoing water impact monitoring',
      required: true,
      formats: '.pdf, .doc, .docx',
      maxSize: '5 MB'
    },
    {
      id: 'communityConsent',
      name: 'Community Consent Forms',
      description: 'Signed consent from affected communities and stakeholders',
      required: true,
      formats: '.pdf, .doc, .docx',
      maxSize: '5 MB'
    },
    {
      id: 'environmentalAssessment',
      name: 'Environmental Impact Assessment',
      description: 'Assessment of environmental effects and mitigation strategies',
      required: false,
      formats: '.pdf, .doc, .docx',
      maxSize: '10 MB'
    },
    {
      id: 'financialPlan',
      name: 'Financial Plan',
      description: 'Budget and financial sustainability plan for the project',
      required: false,
      formats: '.pdf, .xls, .xlsx',
      maxSize: '5 MB'
    }
  ];

  const handleFileUpload = (docId, event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSize = parseInt(requiredDocs.find(d => d.id === docId).maxSize) * 1024 * 1024;
      if (file.size > maxSize) {
        setErrors({
          ...errors,
          [docId]: `File size exceeds maximum allowed size`
        });
        return;
      }

      setUploadedFiles({
        ...uploadedFiles,
        [docId]: file
      });

      setErrors({
        ...errors,
        [docId]: null
      });
    }
  };

  const removeFile = (docId) => {
    setUploadedFiles({
      ...uploadedFiles,
      [docId]: null
    });
  };

  const validateStep3 = () => {
    const newErrors = {};
    requiredDocs.forEach(doc => {
      if (doc.required && !uploadedFiles[doc.id]) {
        newErrors[doc.id] = 'This document is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 3 && validateStep3()) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep !== 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const getUploadProgress = () => {
    const required = requiredDocs.filter(d => d.required).length;
    const uploaded = requiredDocs.filter(d => d.required && uploadedFiles[d.id]).length;
    return (uploaded / required) * 100;
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '3rem' }}>
      <div style={{
        background: 'linear-gradient(135deg, #0891b2, #14b8a6)',
        color: 'white',
        padding: '3rem 0'
      }}>
        <div className="container-narrow">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Submit a New Project
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            Follow our guided process to list your water conservation project
          </p>
        </div>
      </div>

      <div className="container-narrow" style={{ marginTop: '3rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '2rem',
            right: '2rem',
            height: '2px',
            background: 'var(--neutral-200)',
            zIndex: 0
          }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(90deg, var(--primary-blue), var(--accent-teal))',
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              transition: 'width 0.3s ease'
            }} />
          </div>

          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: step.number <= currentStep
                  ? 'linear-gradient(135deg, var(--primary-blue), var(--accent-teal))'
                  : 'white',
                border: `3px solid ${step.number <= currentStep ? 'transparent' : 'var(--neutral-300)'}`,
                color: step.number <= currentStep ? 'white' : 'var(--neutral-600)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '0.9rem',
                marginBottom: '0.75rem',
                boxShadow: step.number === currentStep ? '0 4px 12px rgba(8, 145, 178, 0.4)' : 'none',
                transition: 'all 0.3s ease'
              }}>
                {step.number < currentStep ? '✓' : step.number}
              </div>
              <div style={{
                textAlign: 'center',
                fontSize: '0.85rem',
                fontWeight: step.number === currentStep ? '700' : '600',
                color: step.number === currentStep ? 'var(--primary-blue)' : 'var(--neutral-600)',
                marginBottom: '0.25rem'
              }}>
                {step.title}
              </div>
              <div style={{
                textAlign: 'center',
                fontSize: '0.75rem',
                color: 'var(--neutral-500)'
              }}>
                {step.description}
              </div>
            </div>
          ))}
        </div>

        {currentStep === 3 && (
          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Step 3: Upload Documentation
              </h2>
              <p className="text-muted">
                Please upload all required documents for verification. Our team will review these during the audit process.
              </p>

              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="text-sm font-semibold">Upload Progress</span>
                  <span className="text-sm font-semibold">{Math.round(getUploadProgress())}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${getUploadProgress()}%` }} />
                </div>
                <div className="text-xs text-muted" style={{ marginTop: '0.5rem' }}>
                  {requiredDocs.filter(d => d.required && uploadedFiles[d.id]).length} of {requiredDocs.filter(d => d.required).length} required documents uploaded
                </div>
              </div>
            </div>

            <div className="alert alert-info" style={{ marginBottom: '2rem' }}>
              <strong>💡 Tips for successful submission:</strong>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: 0 }}>
                <li>Ensure all documents are clearly legible and complete</li>
                <li>Use standard formats (PDF preferred for maximum compatibility)</li>
                <li>Include all relevant signatures and dates on consent forms</li>
                <li>Keep file sizes under the specified limits for faster upload</li>
              </ul>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {requiredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="card"
                  style={{
                    border: errors[doc.id]
                      ? '2px solid var(--danger-red)'
                      : uploadedFiles[doc.id]
                      ? '2px solid var(--verified-green)'
                      : '1px solid var(--neutral-200)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                          {doc.name}
                        </h3>
                        {doc.required ? (
                          <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#b91c1c' }}>
                            Required
                          </span>
                        ) : (
                          <span className="badge" style={{ background: 'rgba(148, 163, 184, 0.1)', color: '#64748b' }}>
                            Optional
                          </span>
                        )}
                        {uploadedFiles[doc.id] && (
                          <span className="badge badge-verified">
                            ✓ Uploaded
                          </span>
                        )}
                      </div>

                      <p className="text-muted text-sm" style={{ marginBottom: '0.75rem' }}>
                        {doc.description}
                      </p>

                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--neutral-600)' }}>
                        <span>
                          <strong>Formats:</strong> {doc.formats}
                        </span>
                        <span>
                          <strong>Max Size:</strong> {doc.maxSize}
                        </span>
                      </div>

                      {uploadedFiles[doc.id] && (
                        <div style={{
                          marginTop: '1rem',
                          padding: '0.75rem',
                          background: 'rgba(34, 197, 94, 0.05)',
                          borderRadius: '0.5rem',
                          border: '1px solid rgba(34, 197, 94, 0.2)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>📄</span>
                            <div>
                              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                                {uploadedFiles[doc.id].name}
                              </div>
                              <div className="text-xs text-muted">
                                {(uploadedFiles[doc.id].size / 1024 / 1024).toFixed(2)} MB
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile(doc.id)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: 'var(--danger-red)',
                              cursor: 'pointer',
                              padding: '0.25rem 0.75rem',
                              fontWeight: '600',
                              fontSize: '0.9rem'
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      )}

                      {errors[doc.id] && (
                        <div className="alert" style={{
                          marginTop: '1rem',
                          padding: '0.75rem 1rem',
                          background: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          color: '#b91c1c',
                          borderRadius: '0.5rem',
                          marginBottom: 0
                        }}>
                          ⚠️ {errors[doc.id]}
                        </div>
                      )}
                    </div>

                    {!uploadedFiles[doc.id] && (
                      <div style={{ marginLeft: '1rem' }}>
                        <label
                          htmlFor={`upload-${doc.id}`}
                          className="btn btn-primary"
                          style={{ cursor: 'pointer' }}
                        >
                          Choose File
                        </label>
                        <input
                          id={`upload-${doc.id}`}
                          type="file"
                          onChange={(e) => handleFileUpload(doc.id, e)}
                          style={{ display: 'none' }}
                          accept={doc.formats}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginTop: '2rem', background: 'var(--neutral-50)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem' }}>
                📋 Document Checklist
              </h3>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {requiredDocs.map(doc => (
                  <div
                    key={doc.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'white',
                      borderRadius: '0.5rem'
                    }}
                  >
                    <div style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      background: uploadedFiles[doc.id] ? 'var(--verified-green)' : 'var(--neutral-300)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>
                      {uploadedFiles[doc.id] ? '✓' : ''}
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: uploadedFiles[doc.id] ? '600' : '500' }}>
                      {doc.name}
                    </span>
                    {doc.required && (
                      <span className="text-xs" style={{ color: 'var(--danger-red)', marginLeft: 'auto' }}>
                        Required
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: '3rem',
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '2rem',
              borderTop: '2px solid var(--neutral-200)'
            }}>
              <button className="btn btn-secondary btn-lg" onClick={handleBack}>
                ← Back
              </button>
              <button className="btn btn-primary btn-lg" onClick={handleNext}>
                Continue to Payment →
              </button>
            </div>
          </div>
        )}

        {currentStep !== 3 && (
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Step {currentStep}: {steps[currentStep - 1].title}
            </h2>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>
              This is a placeholder for {steps[currentStep - 1].description}. 
              Navigate to Step 3 to see the complete documentation upload interface.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {currentStep > 1 && (
                <button className="btn btn-secondary" onClick={handleBack}>
                  ← Back
                </button>
              )}
              {currentStep === 3 ? (
                <button className="btn btn-primary" onClick={() => setCurrentStep(3)}>
                  View Step 3 →
                </button>
              ) : (
                <button className="btn btn-primary" onClick={() => setCurrentStep(3)}>
                  Jump to Step 3 (Documentation) →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitProjectPage;
