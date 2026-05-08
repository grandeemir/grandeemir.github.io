import React from 'react';
import { Cloud, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(10, 25, 47, 0.85)',
      backdropFilter: 'blur(10px)',
      padding: '20px 50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent)', fontWeight: 'bold', fontSize: '24px' }}>
        <Cloud size={32} style={{ marginRight: '10px' }} />
        <span>Portfolio</span>
      </div>

      <div style={{ display: 'flex', gap: '30px' }} className="nav-links">
        <a href="#about" style={{ color: 'var(--text-primary)', fontSize: '14px' }}>About</a>
        <a href="#certifications" style={{ color: 'var(--text-primary)', fontSize: '14px' }}>Certifications</a>
        <a href="#projects" style={{ color: 'var(--text-primary)', fontSize: '14px' }}>Projects</a>
        <a href="#contact" style={{ color: 'var(--text-primary)', fontSize: '14px' }}>Contact</a>
      </div>

      <div className="mobile-menu-icon" style={{ display: 'none' }} onClick={toggleMenu}>
        {isOpen ? <X color="var(--accent)" /> : <Menu color="var(--accent)" />}
      </div>
    </nav>
  );
};

export default Navbar;
