import { Link } from 'react-router-dom';
import './pages.css';

interface ArchiveYear {
  year: number;
  posts: number;
}

export default function Archive() {
  const archiveYears: ArchiveYear[] = [
    { year: 2025, posts: 12 },
    { year: 2024, posts: 18 },
    { year: 2023, posts: 15 },
    { year: 2022, posts: 8 },
  ];

  return (
    <main className="page">
      <section className="content-section">
        <h2>Archive</h2>
        
        <p className="archive-intro">
          Browse all of my writing, research, and projects organized by year.
        </p>

        <div className="archive-grid">
          {archiveYears.map((item) => (
            <Link
              key={item.year}
              to={`/archive/${item.year}`}
              className="archive-card"
            >
              <div className="archive-year">{item.year}</div>
              <div className="archive-count">{item.posts} posts</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
