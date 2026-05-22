import React from 'react';
import { Terminal, ExternalLink, Folder } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MainContent: React.FC = () => {
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const projects = [
    {
      title: "Zero-Trust Serverless Application",
      description: "A Zero-Trust Secure File Vault built on AWS with defense-in-depth, featuring identity-based access control, automated threat remediation, and end-to-end encryption.",
      tech: ["Terraform", "Lambda", "Cognito", "API Gateway", "DynamoDB"],
      repo: "Zero-Trust-Serverless-Application",
      github: "https://github.com/grandeemir/Zero-Trust-Serverless-Application"
    },
    {
      title: "Secure 3-Tier Web App on AWS",
      description: "A modular Terraform configuration that automatically deploys a secure, highly available 3-tier web application on AWS with private application and database layers.",
      tech: ["Terraform", "EC2", "RDS", "VPC", "ALB"],
      repo: "Secure3TierWebApp-AWS",
      github: "https://github.com/grandeemir/Secure3TierWebApp-AWS"
    },
    {
      title: "AWS Security Monitoring",
      description: "A production-grade security monitoring and SIEM pipeline focusing on continuous auditing and threat detection by forwarding security findings to Datadog.",
      tech: ["Terraform", "CloudTrail", "AWS Config", "GuardDuty", "Datadog"],
      repo: "aws-security-monitoring",
      github: "https://github.com/grandeemir/aws-security-monitoring"
    }
  ];

  return (
    <main className="main-content">
      <section className="section reveal" id="about">
        <div className="section-header">
          <h2>About</h2>
        </div>
        <p style={{ marginBottom: '20px' }}>
          I build cloud infrastructure, and I break things to figure out how to secure them.
          As a self-driven cloud engineer, I don't just collect certifications—I build the actual architecture. I spend my days working with AWS, writing infrastructure as code with Terraform, and designing zero-trust networks.
        </p>
        <p>
          No buzzwords, just hands-on engineering. Check out my repositories below to see what I mean.
        </p>
      </section>

      <section className="section reveal" id="projects">
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card reveal spotlight" 
            onMouseMove={handleMouseMove}
            onClick={() => navigate(`/project/${project.repo}`)}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <Folder size={24} color="var(--accent)" />
              <div style={{ display: 'flex', gap: '15px' }} onClick={(e) => e.stopPropagation()}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Source"><Terminal size={18} /></a>
                <Link to={`/project/${project.repo}`} title="View Details"><ExternalLink size={18} /></Link>
              </div>
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{project.title}</h3>
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>{project.description}</p>
            <div>
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 0', fontSize: '12px', opacity: 0.6 }}>
        &copy; {new Date().getFullYear()} Emircan Özkara. Built with React & Lucide.
      </footer>
    </main>
  );
};

export default MainContent;