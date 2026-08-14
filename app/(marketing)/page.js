import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(30, 58, 138, 0.08)',
  };

  const btnPrimary = {
    display: 'inline-block',
    background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
    color: '#fff',
    fontWeight: 600,
    padding: '14px 30px',
    borderRadius: '999px',
    boxShadow: '0 8px 25px rgba(37,99,235,0.25)',
  };

  const btnSecondary = {
    display: 'inline-block',
    background: '#ffffff',
    color: '#1e3a8a',
    fontWeight: 600,
    padding: '14px 30px',
    borderRadius: '999px',
    border: '1px solid #cbd5e1',
  };

  const features = [
    { icon: '⚡', title: 'Fast', desc: 'Built for speed and performance.' },
    { icon: '🎨', title: 'Modern Design', desc: 'Clean and elegant user experience.' },
    { icon: '🔒', title: 'Secure', desc: 'Your data is safe with us.' },
  ];

  const services = [
    { icon: '🌐', t: 'Web Design', d: 'Modern, responsive websites tailored to your brand.' },
    { icon: '📱', t: 'App Development', d: 'Fast and reliable mobile & web applications.' },
    { icon: '💡', t: 'Consulting', d: 'Strategy and guidance to grow your business online.' },
  ];

  const stats = [
    { num: '500+', label: 'Happy Clients' },
    { num: '10+', label: 'Years Experience' },
    { num: '200+', label: 'Projects Done' },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '110px 24px 90px',
          background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            background: '#dbeafe',
            color: '#1e3a8a',
            fontSize: '13px',
            fontWeight: 600,
            padding: '6px 16px',
            borderRadius: '999px',
            marginBottom: '20px',
          }}
        >
          Welcome to Our Website
        </span>
        <h1
          style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 800,
            background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '16px',
          }}
        >
          We Build Modern Digital Solutions
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: '#64748b',
            maxWidth: '560px',
            margin: '0 auto 32px',
          }}
        >
          Helping businesses grow with clean design, reliable technology, and real results.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={btnPrimary}>Get Started</Link>
          <Link href="/about" style={btnSecondary}>Learn More</Link>
        </div>
      </div>

      {/* 2. Feature Cards */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '70px 24px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}
        >
          {features.map((f) => (
            <div key={f.title} style={{ ...cardStyle, textAlign: 'center' }}>
              <div style={{ fontSize: '30px', marginBottom: '12px' }}>{f.icon}</div>
              <h3 style={{ color: '#1e3a8a', marginBottom: '8px', fontSize: '18px' }}>{f.title}</h3>
              <p style={{ color: '#64748b', fontSize: '14.5px' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. About Preview */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '28px', marginBottom: '14px', fontWeight: 800 }}>
              Who We Are
            </h2>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
              We are a team passionate about building great digital products.
              Our goal is to help businesses succeed through thoughtful design
              and reliable technology.
            </p>
            <Link href="/about" style={{ color: '#2563eb', fontWeight: 600, fontSize: '15px' }}>
              Learn More About Us →
            </Link>
          </div>
          <div style={{ ...cardStyle, textAlign: 'center', padding: '32px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ color: '#1e3a8a', fontWeight: 800, fontSize: '22px' }}>{s.num}</div>
                  <div style={{ color: '#64748b', fontSize: '12px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Services Preview */}
      <div style={{ background: '#f1f5f9', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ color: '#1e3a8a', fontSize: '28px', marginBottom: '12px', fontWeight: 800, textAlign: 'center' }}>
            What We Offer
          </h2>
          <p style={{ color: '#64748b', fontSize: '15px', textAlign: 'center', marginBottom: '40px' }}>
            A few of the services we provide
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}
          >
            {services.map((s) => (
              <div key={s.t} style={cardStyle}>
                <div style={{ fontSize: '26px', marginBottom: '10px' }}>{s.icon}</div>
                <h4 style={{ color: '#1e3a8a', marginBottom: '6px', fontSize: '16px' }}>{s.t}</h4>
                <p style={{ color: '#64748b', fontSize: '14px' }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/service" style={btnPrimary}>View All Services →</Link>
          </div>
        </div>
      </div>

      {/* 5. Final CTA */}
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px',
          background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
        }}
      >
        <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>
          Ready to get started?
        </h2>
        <p style={{ color: '#dbeafe', fontSize: '15px', marginBottom: '28px' }}>
          Let&apos;s talk about how we can help your business grow.
        </p>
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#1e3a8a',
            fontWeight: 700,
            padding: '14px 32px',
            borderRadius: '999px',
          }}
        >
          Contact Us →
        </Link>
      </div>
    </div>
  );
}