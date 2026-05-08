import React from 'react';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      id: "SAA-C03",
      color: "#FF9900"
    },
    {
      title: "AWS Certified Security – Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      id: "SCS-C02",
      color: "#FF9900"
    }
  ];

  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {certs.map((cert, index) => (
          <div key={index} style={{
            backgroundColor: 'var(--bg-navy)',
            padding: '30px',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'var(--transition)',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <Award size={48} color={cert.color} style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{cert.title}</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{cert.issuer}</p>
            <p style={{ fontSize: '12px', color: 'var(--accent)', marginTop: '10px', fontFamily: 'monospace' }}>ID: {cert.id} | {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
