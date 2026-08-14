import React from 'react';

export default function Services() {
  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(30, 58, 138, 0.08)',
  };

  const services = [
    { icon: '🌐', t: 'Web Design', d: 'Modern, responsive websites tailored to your brand.' },
    { icon: '📱', t: 'App Development', d: 'Fast and reliable mobile & web applications.' },
    { icon: '💡', t: 'Consulting', d: 'Strategy and guidance to grow your business online.' },
    { icon: '🛠️', t: 'Support', d: '24/7 maintenance and technical support.' },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
      <h1
        style={{
          fontSize: 'clamp(30px, 5vw, 44px)',
          fontWeight: 800,
          background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '12px',
        }}
      >
        Our Services
      </h1>
      <p style={{ fontSize: '17px', color: '#64748b', marginBottom: '48px' }}>
        Check out our amazing services!
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '32px',
        }}
      >
        {/* Left: Main content */}
        <div style={{ ...cardStyle, padding: '40px' }}>
          <h2 style={{ color: '#1e3a8a', fontSize: '24px', marginBottom: '14px' }}>
            What We Offer
          </h2>
          <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.8 }}>
            From design to development and ongoing support, we provide everything
            your business needs to succeed online — all in one place.
          </p>
        </div>

        {/* Right: Service cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {services.map((s) => (
            <div key={s.t} style={cardStyle}>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{s.icon}</div>
              <h4 style={{ color: '#1e3a8a', marginBottom: '4px', fontSize: '15px' }}>{s.t}</h4>
              <p style={{ color: '#64748b', fontSize: '13.5px' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}