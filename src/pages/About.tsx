import './pages.css';

export default function About() {
  return (
    <main className="page">
      <section className="content-section">
        <h2>About</h2>
        
        <div className="content-block">
          <h3>Background</h3>
          <p>
           I'm Hongjie Wu, a software and machine learning engineer with a strong interest in building reliable, production-minded ML systems. My work spans uncertainty-aware modelling and natural language processing, with experience developing scalable data pipelines, model evaluation workflows, and cloud-backed services in Python and Java.
          </p>
        </div>

        <div className="content-block">
          <h3>Current Work</h3>
          <p>
            My current work focuses on developing robust ML systems that combine uncertainty-aware modelling with strong evaluation, spanning both vision-based pipelines and NLP tasks.
          </p>
        </div>

        <div className="content-block">
            <h3>Education</h3>
            <ul className="education-list">
                <li>
                <strong>MRes in AI and Machine Learning</strong>
                <p>Imperial College London • Sep 2024 – Sep 2025</p>
                </li>
                <li>
                <strong>MSc in Machine Learning for Visual Data Analytics</strong>
                <p>Queen Mary University of London • Sep 2023 – Sep 2024</p>
                </li>
                <li>
                <strong>BSc in Computer Science</strong>
                <p>University of Bristol • Sep 2019 – Jun 2022</p>
                </li>
            </ul>
        </div>
        

        {/* <div className="content-block">
          <h3>Beyond Research</h3>
          <p>
            When I'm not researching or coding, you'll find me [hobby], [hobby], or exploring [interest].
          </p>
        </div> */}
      </section>
    </main>
  );
}
