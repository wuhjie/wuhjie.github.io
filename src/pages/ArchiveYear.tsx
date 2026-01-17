import { useParams } from 'react-router-dom';
import './pages.css';

interface ArchiveItem {
  title: string;
  date: string;
  category: string;
}

export default function ArchiveYear() {
  const { year } = useParams<{ year: string }>();

  // Sample data - replace with actual data from your CMS/database
  const archiveItems: ArchiveItem[] = [
    {
      title: 'Research Publication on Machine Learning',
      date: `January 15, ${year}`,
      category: 'Publication'
    },
    {
      title: 'Workshop: Introduction to Web Development',
      date: `February 20, ${year}`,
      category: 'Teaching'
    },
    {
      title: 'Blog Post: Best Practices in Code Documentation',
      date: `March 10, ${year}`,
      category: 'Writing'
    },
    {
      title: 'Presented at International Conference on AI',
      date: `April 5, ${year}`,
      category: 'Conference'
    },
  ];

  return (
    <main className="page">
      <section className="content-section">
        <h2>Archive {year}</h2>
        
        <div className="timeline">
          {archiveItems.map((item, index) => (
            <article key={index} className="timeline-item">
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="timeline-category">{item.category}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
