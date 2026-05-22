import React from 'react';
import { Terminal, Briefcase, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      <p style={{ color: 'var(--accent)', marginBottom: '20px', fontFamily: 'monospace' }}>Hi, my name is</p>
      <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 600, color: 'var(--white)' }}>
        Cloud Engineer.
      </h1>
      <h2 style={{ fontSize: 'clamp(30px, 6vw, 60px)', color: 'var(--text-secondary)', marginTop: '5px' }}>
        I build secure & resilient cloud systems.
      </h2>
      <p style={{ maxWidth: '540px', marginTop: '20px', fontSize: '18px' }}>
        Specializing in AWS architecture, DevSecOps automation, and continuous compliance. I help organizations scale their infrastructure securely in the cloud.
      </p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
          <Terminal size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <Briefcase size={24} />
        </a>
        <a href="https://www.credly.com" target="_blank" rel="noopener noreferrer" title="Credly">
          <ShieldCheck size={24} />
        </a>
      </div>

      <div style={{ marginTop: '50px' }}>
        <a href="#projects">
          <button>View My Projects</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
