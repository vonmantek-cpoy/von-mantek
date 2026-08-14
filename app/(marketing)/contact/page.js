'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSent(true);
  };

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(30, 58, 138, 0.08)',
  };

  const inputStyle = {
    width: '100%',
    fontSize: '14.5px',
    padding: '12px 14px',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    outline: 'none',
    fontFamily: 'inherit',
    marginTop: '6px',
  };

  const socials = [
    { icon: '📘', name: 'Facebook' },
    { icon: '📸', name: 'Instagram' },
    { icon: '✈️', name: 'Telegram' },
  ];

  const faqs = [
    { q: 'How fast do you reply?', a: 'We usually respond within 24 hours on business days.' },
    { q: 'Do you offer free consultation?', a: 'Yes! The first consultation call is completely free.' },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
      {/* Intro */}
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
        Contact Us
      </h1>
      <p style={{ fontSize: '17px', color: '#64748b', marginBottom: '48px' }}>
        Get in touch with us today — we&apos;d love to hear from you!
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '32px',
        }}
      >
        {/* Left: Form */}
        <form onSubmit={handleSubmit} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'vertical' }} />
          </label>
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '15px',
              padding: '13px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
          {sent && <p style={{ color: '#16a34a', fontWeight: 600, fontSize: '14px' }}>✅ Thank you! We&apos;ll reply soon.</p>}
        </form>

        {/* Right: Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={cardStyle}>
            <h4 style={{ color: '#1e3a8a', marginBottom: '6px', fontSize: '15px' }}>📍 Address</h4>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Phnom Penh, Cambodia</p>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: '#1e3a8a', marginBottom: '6px', fontSize: '15px' }}>📞 Phone</h4>
            <p style={{ color: '#64748b', fontSize: '14px' }}>+855 12 345 678</p>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: '#1e3a8a', marginBottom: '6px', fontSize: '15px' }}>✉️ Email</h4>
            <p style={{ color: '#64748b', fontSize: '14px' }}>hello@mywebsite.com</p>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: '#1e3a8a', marginBottom: '6px', fontSize: '15px' }}>🕒 Business Hours</h4>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Mon – Fri: 8:00 AM – 6:00 PM</p>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Sat: 8:00 AM – 12:00 PM</p>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: '#1e3a8a', marginBottom: '10px', fontSize: '15px' }}>🔗 Follow Us</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                  }}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div style={{ marginTop: '40px', ...cardStyle, padding: 0, overflow: 'hidden' }}>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=Phnom%20Penh,%20Cambodia&output=embed"
          width="100%"
          height="320"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
        />
      </div>

      {/* FAQ */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '24px', fontWeight: 800, marginBottom: '24px', textAlign: 'center' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '700px', margin: '0 auto' }}>
          {faqs.map((f) => (
            <div key={f.q} style={cardStyle}>
              <h4 style={{ color: '#1e293b', marginBottom: '6px', fontSize: '15px' }}>{f.q}</h4>
              <p style={{ color: '#64748b', fontSize: '14px' }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}