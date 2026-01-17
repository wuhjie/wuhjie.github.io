import './pages.css';

interface WorkItem {
  title: string;
  year: number;
  description: string;
  tags: string[];
  link?: string;
}

export default function Work() {
  const workItems: WorkItem[] = [
    {
      title: 'Abductive Event Reasoning: Towards Real-World Event Causal Inference for Large Language Models',
      year: 2026,
      description:
        'Built a staged NLP pipeline for abductive causal inference, integrating evidence retrieval with transformer-based reasoning to produce stable and interpretable predictions.',
      tags: ['NLP', 'Reasoning', 'Retrieval', 'Transformers'],
      link: '#'
    },
    {
      title: 'Task-oriented Uncertainty Collaborative Learning (TUCL) for Label-Efficient Brain Tumor Segmentation',
      year: 2025,
      description:
        'Developed a label-efficient segmentation framework for brain tumour MRI, combining task-driven training objectives with robust evaluation and reproducible experimentation.',
      tags: ['Segmentation', 'Medical Imaging', 'PyTorch', 'ISBI 2026'],
      link: 'https://arxiv.org/abs/2503.05682'
    }
    
  ];

  return (
    <main className="page">
      <section className="content-section">
        <h2>Work</h2>
        
        <div className="work-grid">
          {workItems.map((item, index) => (
            <article key={index} className="work-item">
              <div className="work-header">
                <h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <span className="work-year">{item.year}</span>
              </div>
              <p className="work-description">{item.description}</p>
              <div className="work-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
