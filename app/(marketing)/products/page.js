import React from 'react';

export default function Products() {
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '100px 24px 80px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(30px, 5vw, 44px)',
          fontWeight: 800,
          background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '16px',
        }}
      >
        Our Products
      </h1>
      <p
        style={{
          fontSize: '17px',
          color: '#64748b',
          lineHeight: 1.7,
        }}
      >
        Check out our amazing products!
      </p>
    </div>
  );
}