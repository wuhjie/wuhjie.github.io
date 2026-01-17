import { useParams, useNavigate } from 'react-router-dom';
import { getThoughtById } from '../data/thoughts';
import './pages.css';

export default function ThoughtDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = getThoughtById(id || '');

  if (!post) {
    return (
      <main className="page">
        <section className="content-section">
          <h2>Thought Not Found</h2>
          <p>The thought you're looking for doesn't exist.</p>
          <a 
            onClick={() => navigate('/thoughts')}
            style={{ cursor: 'pointer' }}
            className="back-link"
          >
            Back to Thoughts
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="content-section">
        <article className="thought-detail">
          <h1>{post.title}</h1>
          
          <div className="post-meta" style={{ marginBottom: '2em' }}>
            <span className="post-date">{post.date}</span>
            <span className="post-category">{post.category}</span>
          </div>

          <div className="thought-content">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <a 
            onClick={() => navigate('/thoughts')}
            style={{ cursor: 'pointer' }}
            className="back-link"
          >
            ← Back to Thoughts
          </a>
        </article>
      </section>
    </main>
  );
}
