import React from 'react';
import { Terminal, Briefcase, ExternalLink, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" style={{
      padding: '50px 0',
      textAlign: 'center',
      backgroundColor: 'var(--bg-color)',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Get In Touch</h2>
        <p style={{ marginBottom: '40px' }}>
          I'm currently looking for new opportunities in Cloud Security. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:example@email.com">
          <button style={{ padding: '15px 50px', fontSize: '16px' }}>Say Hello</button>
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '60px', color: 'var(--text-secondary)' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub"><Terminal size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Briefcase size={20} /></a>
          <a href="https://www.credly.com" target="_blank" rel="noopener noreferrer" title="Credly"><ShieldCheck size={20} /></a>
        </div>

        <p style={{ marginTop: '30px', fontSize: '12px', fontFamily: 'monospace' }}>
          Designed & Built by Cloud Security Engineer &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
