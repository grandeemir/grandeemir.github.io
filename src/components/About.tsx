import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px' }}>
        <div>
          <p style={{ marginBottom: '15px' }}>
            Hello! I am a Cloud Engineer with a deep passion for security. My journey in technology started with a fascination for how data travels across the globe, which eventually led me to specialize in protecting that data within cloud environments.
          </p>
          <p style={{ marginBottom: '15px' }}>
            I focus on designing and implementing secure, scalable architectures on AWS. I believe that security should be integrated into every step of the development lifecycle, not just added at the end.
          </p>
          <p style={{ marginBottom: '15px' }}>
            Here are a few technologies and concepts I've been working with recently:
          </p>
          <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
            padding: 0,
            margin: '20px 0 0 0',
            listStyle: 'none',
          }}>
            <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px', fontSize: '13px' }}>
              <span style={{ color: 'var(--accent)', position: 'absolute', left: 0 }}>▹</span> AWS IAM & Governance
            </li>
            <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px', fontSize: '13px' }}>
              <span style={{ color: 'var(--accent)', position: 'absolute', left: 0 }}>▹</span> Infrastructure as Code (Terraform)
            </li>
            <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px', fontSize: '13px' }}>
              <span style={{ color: 'var(--accent)', position: 'absolute', left: 0 }}>▹</span> Network Security (VPC, WAF)
            </li>
            <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px', fontSize: '13px' }}>
              <span style={{ color: 'var(--accent)', position: 'absolute', left: 0 }}>▹</span> DevSecOps (GitHub Actions)
            </li>
            <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px', fontSize: '13px' }}>
              <span style={{ color: 'var(--accent)', position: 'absolute', left: 0 }}>▹</span> Serverless Security
            </li>
            <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px', fontSize: '13px' }}>
              <span style={{ color: 'var(--accent)', position: 'absolute', left: 0 }}>▹</span> Incident Response Automation
            </li>
          </ul>
        </div>
        <div style={{ position: 'relative', maxWidth: '300px' }}>
           <div style={{
             width: '100%',
             height: '300px',
             borderRadius: '4px',
             border: '2px solid var(--accent)',
             position: 'absolute',
             top: '20px',
             left: '20px',
             zIndex: -1
           }}></div>
           <div style={{
             width: '100%',
             height: '300px',
             backgroundColor: 'var(--bg-light-navy)',
             borderRadius: '4px',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             color: 'var(--accent)',
             fontSize: '18px'
           }}>
             [Cloud Security Image]
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
