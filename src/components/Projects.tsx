import React from 'react';
import { Folder, Terminal, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Secure 3 Tier Web Application",
      description: "A serverless solution that automatically detects and remediates misconfigured S3 buckets and IAM policies in real-time using AWS Config and Lambda.",
      tech: ["EC2", "S3", "RDS", "VPC", "ASG"],
      github: "https://github.com",
      link: "https://example.com"
    },
    {
      title: "Secure Serverless Architecture",
      description: "Designed a resilient web architecture utilizing Amazon API Gateway, AWS WAF to block common exploits, and Amazon Cognito for secure user authentication.",
      tech: ["AWS WAF", "Cognito", "API Gateway", "DynamoDB", "Lambda"],
      github: "https://github.com",
      link: "https://example.com"
    },
    {
      title: "IaC Deployment Pipeline",
      description: "Developed a CI/CD pipeline using GitHub Actions and Terraform to deploy secure VPC architectures with strict security group rules and NACLs.",
      tech: ["Terraform", "GitHub Actions", "AWS VPC", "S3"],
      github: "https://github.com",
      link: "https://example.com"
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
