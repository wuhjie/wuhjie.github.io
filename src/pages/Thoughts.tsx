import { Link } from 'react-router-dom';
import { allThoughts } from '../data/thoughts';
import './pages.css';

export default function Thoughts() {
  return (
    <main className="page">
      <section className="content-section">
        <h2>Thoughts</h2>
        
        <div className="posts-list">
          {allThoughts.map((post) => (
            <article key={post.id} className="post-item">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-category">{post.category}</span>
              </div>
              <h3>
                <Link to={`/thoughts/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link to={`/thoughts/${post.id}`} className="read-more">Read More →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

