import React from 'react';
import { Terminal, ExternalLink, Folder } from 'lucide-react';

const MainContent: React.FC = () => {
  const projects = [
    {
      title: "Automated AWS Security Auditing",
      description: "A serverless solution that automatically detects and remediates misconfigured S3 buckets and IAM policies in real-time using AWS Config and Lambda.",
      tech: ["AWS Lambda", "Python", "AWS Config"],
      link: "#"
    },
    {
      title: "Secure Serverless Architecture",
      description: "Designed a resilient web architecture utilizing Amazon API Gateway, AWS WAF to block common exploits, and Amazon Cognito for secure user authentication.",
      tech: ["AWS WAF", "Cognito", "API Gateway"],
      link: "#"
    },
    {
      title: "IaC Deployment Pipeline",
      description: "Developed a CI/CD pipeline using GitHub Actions and Terraform to deploy secure VPC architectures with strict security group rules and NACLs.",
      tech: ["Terraform", "GitHub Actions", "AWS VPC"],
      link: "#"
    }
  ];

  const blogPosts = [
    {
      title: "Implementing Zero Trust on AWS",
      excerpt: "A deep dive into the principles of Zero Trust and how to implement them using AWS native security services like Verified Access and IAM.",
      date: "Oct 15, 2023",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "Securing Your Terraform State",
      excerpt: "Best practices for managing and securing Terraform state files using S3 backend with encryption and DynamoDB for state locking.",
      date: "Sep 22, 2023",
      readTime: "5 min read",
      link: "#"
    }
  ];

  return (
    <main className="main-content">
      <section className="section" id="about">
        <div className="section-header">
          <h2>About</h2>
        </div>
        <p style={{ marginBottom: '20px' }}>
          I am a dedicated Cloud Security Engineer with a strong focus on protecting organizational assets in the cloud. My expertise lies in designing and implementing secure, scalable architectures on AWS, following the Well-Architected Framework.
        </p>
        <p>
          I believe that security is not a checkbox but a continuous process of improvement and automation. My goal is to build systems that are secure by design and resilient by nature.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <Folder size={24} color="var(--accent)" />
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href={project.link}><Terminal size={18} /></a>
                <a href={project.link}><ExternalLink size={18} /></a>
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

      <section className="section" id="blog">
        <div className="section-header">
          <h2>Blog Posts</h2>
        </div>
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <p style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '5px', fontFamily: 'monospace' }}>
              {post.date} • {post.readTime}
            </p>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{post.title}</h3>
            <p style={{ fontSize: '14px', marginBottom: '15px' }}>{post.excerpt}</p>
            <a href={post.link} style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Read Article <ExternalLink size={14} />
            </a>
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
