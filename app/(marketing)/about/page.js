import React from 'react';
import Link from 'next/link';

export default function About() {
  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(30, 58, 138, 0.08)',
  };

  const values = [
    { icon: '🎯', t: 'Our Mission', d: 'Deliver simple, powerful solutions for real problems.' },
    { icon: '🔭', t: 'Our Vision', d: 'Become a trusted partner for every client we work with.' },
    { icon: '🤝', t: 'Our Values', d: 'Honesty, quality, and long-term relationships.' },
  ];

  const team = [
    { name: 'Sok Dara', role: 'Founder & CEO', avatar: '👨‍💼' },
    { name: 'Chan Sopheak', role: 'Lead Designer', avatar: '👩‍🎨' },
    { name: 'Vong Rithy', role: 'Lead Developer', avatar: '👨‍💻' },
    { name: 'Ly Sreymom', role: 'Project Manager', avatar: '👩‍💼' },
  ];

  const reasons = [
    { icon: '✅', t: 'Proven Track Record', d: '10+ years delivering real results for clients.' },
    { icon: '⚙️', t: 'Modern Technology', d: 'We use the latest tools and best practices.' },
    { icon: '💬', t: 'Clear Communication', d: 'We keep you updated at every step.' },
    { icon: '❤️', t: 'Client-Focused', d: 'Your success is our top priority.' },
  ];

  return (
    <div>
      {/* 1. Intro */}
      <div
        style={{
          textAlign: 'center',
          padding: '100px 24px 70px',
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
          About Us
        </span>
        <h1
          style={{
            fontSize: 'clamp(30px, 5vw, 48px)',
            fontWeight: 800,
            background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '16px',
          }}
        >
          Who We Are
        </h1>
        <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '560px', margin: '0 auto' }}>
          We are a team passionate about building great digital products
          that help businesses succeed.
        </p>
      </div>

      {/* 2. Our Story */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: 800, marginBottom: '24px', textAlign: 'center' }}>
          Our Story
        </h2>
        <div style={{ color: '#64748b', fontSize: '15.5px', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p>
            We started with a simple idea: businesses deserve digital experiences
            that are both beautiful and functional. What began as a small team
            working out of a home office has grown into a company trusted by
            clients across many industries.
          </p>
          <p>
            Along the way, we learned that great results come from listening
            closely to our clients, staying curious about new technology, and
            never settling for "good enough." That mindset still guides
            everything we do today.
          </p>
          <p>
            Today, we&apos;re proud to help businesses of all sizes bring their
            ideas to life — one project at a time.
          </p>
        </div>
      </div>

      {/* 3. Mission / Vision / Values */}
      <div style={{ background: '#f1f5f9', padding: '70px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {values.map((v) => (
              <div key={v.t} style={{ ...cardStyle, textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{v.icon}</div>
                <h3 style={{ color: '#1e3a8a', marginBottom: '10px', fontSize: '18px' }}>{v.t}</h3>
                <p style={{ color: '#64748b', fontSize: '14.5px' }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Team */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: 800, marginBottom: '10px', textAlign: 'center' }}>
          Meet Our Team
        </h2>
        <p style={{ color: '#64748b', fontSize: '15px', textAlign: 'center', marginBottom: '40px' }}>
          The people behind the work
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {team.map((m) => (
            <div key={m.name} style={{ ...cardStyle, textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 14px',
                  borderRadius: '50%',
                  background: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}
              >
                {m.avatar}
              </div>
              <h4 style={{ color: '#1e293b', marginBottom: '4px', fontSize: '15.5px' }}>{m.name}</h4>
              <p style={{ color: '#64748b', fontSize: '13.5px' }}>{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Why Choose Us */}
      <div style={{ background: '#f1f5f9', padding: '70px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>
            Why Choose Us
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}
          >
            {reasons.map((r) => (
              <div key={r.t} style={cardStyle}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>{r.icon}</div>
                <h4 style={{ color: '#1e3a8a', marginBottom: '6px', fontSize: '15.5px' }}>{r.t}</h4>
                <p style={{ color: '#64748b', fontSize: '13.5px' }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px',
          background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
        }}
      >
        <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>
          Want to work with us?
        </h2>
        <p style={{ color: '#dbeafe', fontSize: '15px', marginBottom: '28px' }}>
          Let&apos;s build something great together.
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
          Get in Touch →
        </Link>
      </div>
    </div>
  );
}