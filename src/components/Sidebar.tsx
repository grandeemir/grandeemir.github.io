import React from 'react';
import { Mail, Award } from 'lucide-react';

const Sidebar: React.FC = () => {
  // Brand Logos as SVGs for highest quality
  const Logos = {
    GitHub: () => (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    ),
    LinkedIn: () => (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.771-.773 1.771-1.729V1.729C24 .774 23.206 0 22.225 0z"/></svg>
    ),
    Credly: () => (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 0c-1.53.01-2.91.48-4.14 1.34L6.11 2.58c-1.07.76-1.92 1.78-2.53 3.03L2.24 8.41a8.88 8.88 0 00-.91 3.86c.01 1.48.4 2.89 1.11 4.14l1.31 2.27c.72 1.25 1.75 2.28 3.03 3.03l2.27 1.31c1.25.71 2.66 1.1 4.14 1.11 1.48-.01 2.89-.4 4.14-1.11l2.27-1.31c1.28-.75 2.31-1.78 3.03-3.03l1.31-2.27c.71-1.25 1.1-2.66 1.11-4.14-.01-1.48-.4-2.89-1.11-4.14l-1.31-2.27c-.72-1.25-1.75-2.28-3.03-3.03l-2.27-1.31c-1.25-.71-2.66-1.1-4.14-1.11h.02zm-3.13 5.92c.31 0 .63.08.92.25l4.31 2.49c.58.34.93.96.93 1.63v4.98c0 .67-.35 1.29-.93 1.63l-4.31 2.49c-.58.34-1.3.34-1.88 0l-4.31-2.49c-.58-.34-.93-.96-.93-1.63V10.3c0-.67.35-1.29.93-1.63l4.31-2.49c.29-.17.61-.25.92-.25h.04zm6.26 3.61c.31 0 .63.08.92.25l4.31 2.49c.58.34.93.96.93 1.63v4.98c0 .67-.35 1.29-.93 1.63l-4.31 2.49c-.58.34-1.3.34-1.88 0l-4.31-2.49c-.58-.34-.93-.96-.93-1.63V13.9c0-.67.35-1.29.93-1.63l4.31-2.49c.29-.17.61-.25.92-.25h.04z"/></svg>
    )
  };

  const [imgError, setImgError] = React.useState({ saa: false, scs: false });

  const handleImgError = (type: 'saa' | 'scs') => {
    setImgError(prev => ({ ...prev, [type]: true }));
  };

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-photo">
          <img src="https://avatars.githubusercontent.com/u/194475869?s=400&u=cff54627cc848c95786a584e668d41b27f642c08&v=4" alt="Emircan Özkara" />
        </div>
        <h1 className="sidebar-title">Emircan Özkara</h1>
        <h2 className="sidebar-subtitle">Cloud Engineer</h2>
        <p style={{ fontSize: '14px', maxWidth: '250px', marginBottom: '30px', textAlign: 'left' }}>
          Zero-trust mindset. Hands-on cloud engineering.
        </p>

        <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
           <h3 style={{ fontSize: '14px', color: 'var(--accent)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Certifications</h3>
           <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
             <a href="https://www.credly.com/badges/81befb0f-561b-432c-9da7-7d67f72b9144" target="_blank" rel="noopener noreferrer" title="AWS Solutions Architect Associate">
               {!imgError.saa ? (
                 <img 
                   src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" 
                   alt="AWS SAA Badge" 
                   style={{ width: '85px', height: '85px', transition: 'var(--transition)' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                   onError={() => handleImgError('saa')}
                 />
               ) : (
                 <div style={{ width: '85px', height: '85px', backgroundColor: 'var(--bg-navy)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Award size={32} color="#FF9900" />
                 </div>
               )}
             </a>
             {/* 
             <a href="https://www.credly.com/org/amazon-web-services/badge/aws-certified-security-specialty" target="_blank" rel="noopener noreferrer" title="AWS Security Specialty">
               {!imgError.scs ? (
                 <img 
                   src="https://images.credly.com/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png" 
                   alt="AWS SCS Badge" 
                   style={{ width: '85px', height: '85px', transition: 'var(--transition)' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                   onError={() => handleImgError('scs')}
                 />
               ) : (
                 <div style={{ width: '85px', height: '85px', backgroundColor: 'var(--bg-navy)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Award size={32} color="#FF9900" />
                 </div>
               )}
             </a>
             */}
           </div>
        </div>

        <div className="sidebar-links" style={{ display: 'flex', justifyContent: 'flex-start', gap: '12px', marginTop: '30px', flexWrap: 'wrap' }}>
          <a href="https://github.com/grandeemir" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Logos.GitHub />
          </a>
          <a href="https://www.linkedin.com/in/grandeemir/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Logos.LinkedIn />
          </a>
          <a href="https://www.credly.com/users/grandeemir" target="_blank" rel="noopener noreferrer" title="Credly">
            <Logos.Credly />
          </a>
        </div>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <a href="mailto:hi@grandeemir.dev" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', fontSize: '14px' }}>
          <Mail size={18} />
          <span>get in touch</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;