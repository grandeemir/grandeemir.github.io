import React from 'react';
import { Folder, Terminal, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Zero-Trust Serverless Application",
      description: "A Zero-Trust Secure File Vault built on AWS with defense-in-depth, featuring identity-based access control, automated threat remediation, and end-to-end encryption.",
      tech: ["Terraform", "Lambda", "Cognito", "API Gateway", "DynamoDB"],
      github: "https://github.com/grandeemir/Zero-Trust-Serverless-Application",
      link: "https://github.com/grandeemir/Zero-Trust-Serverless-Application"
    },
    {
      title: "Secure 3-Tier Web App on AWS",
      description: "A modular Terraform configuration that automatically deploys a secure, highly available 3-tier web application on AWS with private application and database layers.",
      tech: ["Terraform", "EC2", "RDS", "VPC", "ALB"],
      github: "https://github.com/grandeemir/Secure3TierWebApp-AWS",
      link: "https://github.com/grandeemir/Secure3TierWebApp-AWS"
    },
    {
      title: "AWS Security Monitoring",
      description: "A production-grade security monitoring and SIEM pipeline focusing on continuous auditing and threat detection by forwarding security findings to Datadog.",
      tech: ["Terraform", "CloudTrail", "AWS Config", "GuardDuty", "Datadog"],
      github: "https://github.com/grandeemir/aws-security-monitoring",
      link: "https://github.com/grandeemir/aws-security-monitoring"
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Some Things I've Built</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            backgroundColor: 'var(--bg-navy)',
            padding: '30px',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'var(--transition)',
            height: '100%'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <Folder size={40} color="var(--accent)" />
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub"><Terminal size={20} /></a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" title="Live Link"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{project.description}</p>
            </div>
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              listStyle: 'none',
              padding: 0,
              marginTop: '20px',
              fontFamily: 'monospace',
              fontSize: '12px'
            }}>
              {project.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
