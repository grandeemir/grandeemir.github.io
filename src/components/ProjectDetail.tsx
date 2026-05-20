import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Terminal } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { repoName } = useParams<{ repoName: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      setLoading(true);
      setError(null);
      try {
        // Try fetching from main branch first
        let response = await fetch(`https://raw.githubusercontent.com/grandeemir/${repoName}/main/README.md`);
        let branch = 'main';
        
        // If not found, try master branch
        if (!response.ok) {
          response = await fetch(`https://raw.githubusercontent.com/grandeemir/${repoName}/master/README.md`);
          branch = 'master';
        }

        if (!response.ok) {
          throw new Error('Failed to fetch project details (README.md)');
        }

        let text = await response.text();
        
        // Fix relative image URLs (HTML tags)
        text = text.replace(/src="(?!http|\/\/)([^"]+)"/g, `src="https://raw.githubusercontent.com/grandeemir/${repoName}/${branch}/$1"`);
        
        // Fix relative image URLs (Markdown syntax)
        text = text.replace(/\]\((?!http|\/\/)([^)]+)\)/g, `](https://raw.githubusercontent.com/grandeemir/${repoName}/${branch}/$1)`);

        setContent(text);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (repoName) {
      fetchReadme();
      // Scroll to top when loading a new project
      window.scrollTo(0, 0);
    }
  }, [repoName]);

  return (
    <main className="main-content">
      <div style={{ marginBottom: '30px' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--accent)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '16px',
            fontFamily: 'inherit',
            padding: 0
          }}
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </button>
      </div>

      {loading ? (
        <div>Loading project details...</div>
      ) : error ? (
        <div style={{ color: '#ff5555' }}>
          <h3>Error Loading Project</h3>
          <p>{error}</p>
        </div>
      ) : (
        <div className="project-detail-container reveal spotlight" style={{ padding: '40px', borderRadius: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginBottom: '20px' }}>
             <a href={`https://github.com/grandeemir/${repoName}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
               <Terminal size={18} /> View on GitHub
             </a>
          </div>
          <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDetail;
