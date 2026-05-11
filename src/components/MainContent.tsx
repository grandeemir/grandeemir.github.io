import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, Folder } from 'lucide-react';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

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

  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@grandeemir');
        const data = await response.json();
        
        if (data && data.items) {
          // Get the latest 5 items
          const formattedPosts = data.items.slice(0, 5).map((item: MediumPost) => {
            // Extract a brief excerpt by stripping HTML tags
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.description;
            const textContent = tempDiv.textContent || tempDiv.innerText || '';
            const excerpt = textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent;
            
            // Calculate approximate read time
            const wordCount = textContent.trim().split(/\s+/).length;
            const readTimeVal = Math.ceil(wordCount / 200);
            const readTime = `${readTimeVal > 0 ? readTimeVal : 1} min read`;

            // Format date
            const dateObj = new Date(item.pubDate);
            const date = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            return {
              title: item.title,
              excerpt: excerpt,
              date: date,
              readTime: readTime,
              link: item.link
            };
          });
          setBlogPosts(formattedPosts);
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setLoadingBlogs(false);
      }
    };

    fetchMediumPosts();
  }, []);

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
        {loadingBlogs ? (
          <p style={{ fontSize: '14px', opacity: 0.8 }}>Loading latest posts...</p>
        ) : blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <p style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '5px', fontFamily: 'monospace' }}>
                {post.date} • {post.readTime}
              </p>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{post.title}</h3>
              <p style={{ fontSize: '14px', marginBottom: '15px' }}>{post.excerpt}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                Read Article <ExternalLink size={14} />
              </a>
            </div>
          ))
        ) : (
          <p style={{ fontSize: '14px', opacity: 0.8 }}>No posts found.</p>
        )}
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 0', fontSize: '12px', opacity: 0.6 }}>
        &copy; {new Date().getFullYear()} Emircan Özkara. Built with React & Lucide.
      </footer>
    </main>
  );
};

export default MainContent;
