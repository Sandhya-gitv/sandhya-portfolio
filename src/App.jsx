
import PixelExplosion from "./PixelExplosion";
import "./App.css";


const projects = [
  {
    title: "Netflix Data Analytics",
    category: "01 / DATA ANALYTICS",
    description:
      "An interactive dashboard exploring Netflix content, release trends, and movies vs. TV shows.",
    tools: ["Power BI", "Data Visualization", "Excel"],
    github: "https://github.com/Sandhya-gitv",
    demo: "",
    accent: "netflix",
    visual: "N",
  },
  {
    title: "Dynamic Train ETA Forecasting",
    category: "02 / MACHINE LEARNING",
    description:
      "A forecasting solution that estimates train arrival delays using historical railway data and Random Forest.",
    tools: ["Python", "Random Forest", "FastAPI"],
    github: "https://github.com/Sandhya-gitv",
    demo: "",
    accent: "rail",
    visual: "ETA",
  },
  {
    title: "Lung Cancer Detection",
    category: "03 / DEEP LEARNING",
    description:
      "A CNN-based image classification project for exploring normal, benign, and malignant image categories.",
    tools: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/Sandhya-gitv/lung-cancer-detection-cnn",
    demo: "",
    accent: "medical",
    visual: "CNN",
  },
];


function App() {
  return (
    <>
      <PixelExplosion />

      <header className="navbar">
        <a href="#home" className="logo">SS<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">B.TECH CSE '28 · PORTFOLIO</p>
            <h1>Hi, I'm <span>Sandhya Singh</span></h1>
            <h2>Aspiring Data Analyst</h2>
            <p className="description">
              Turning raw data into meaningful insights using
              SQL, Python, Power BI and Excel.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                Explore Projects ↗
              </a>
              <a className="secondary-btn" href="#contact">
                Let's Connect
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Sandhya-gitv"
                 target="_blank" rel="noreferrer">GitHub ↗</a>
              <a
                 href="https://www.linkedin.com/in/sanvi147/"
                 target="_blank"
                 rel="noopener noreferrer"
                   >
                     LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="analytics-card">
            <div className="card-top">
              <span>DATA OVERVIEW</span>
              <span className="live-dot">● LIVE DESIGN</span>
            </div>
            <p className="chart-title">Insights through data</p>
            <div className="chart">
              {[38, 65, 48, 82, 57, 92, 70, 100, 76, 88].map(
                (height, i) => (
                  <div className="bar" key={i}>
                    <span style={{ height: `${height}%` }} />
                  </div>
                )
              )}
            </div>
            <div className="chart-footer">
              <div><span>01</span><b>Analyze</b></div>
              <div><span>02</span><b>Visualize</b></div>
              <div><span>03</span><b>Discover</b></div>
            </div>
            <p className="chart-note">
              SQL <span>•</span> Python <span>•</span> Power BI
            </p>
          </div>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Curious about data. Focused on insights.</h2>
          <p className="section-description">
            I'm a Computer Science engineering student building
            practical projects in data analytics, visualization
            and machine learning.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Skills & Technologies</h2>
          <div className="skills">
            {["SQL", "Python", "Power BI", "Excel",
              "Statistics", "Pandas", "Machine Learning", "GitHub"]
              .map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects that tell a story.</h2>
          <div className="project-grid">
            
<section className="section" id="projects">
  <p className="eyebrow">SELECTED WORK</p>
  <h2>Projects that tell a story.</h2>
  <p className="section-description">
    Practical projects combining data, technology and problem-solving.
  </p>

  <div className="project-grid">
    {projects.map((project) => (
      <article
        className={`project-card ${project.accent}`}
        key={project.title}
      >
        <div className="project-visual" aria-hidden="true">
          <span className="visual-label">{project.category}</span>
          <span className="visual-mark">{project.visual}</span>
          <span className="visual-decoration">✳</span>
        </div>

        <div className="project-body">
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-description">
            {project.description}
          </p>

          <div className="project-tags">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <div className="project-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub ↗
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-link demo-link"
              >
                Live Demo ↗
              </a>
            ) : (
              <span className="demo-unavailable">
                Demo coming soon
              </span>
            )}
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have an opportunity or idea?</h2>
          <p>I'd love to connect and learn from new challenges.</p>
          <a className="primary-btn"
             href="https://www.linkedin.com/in/sanvi147/"
             target="_blank" rel="noreferrer">
            Connect on LinkedIn ↗
          </a>
        </section>
      </main>

      <footer>Designed & built by Sandhya Singh · B.Tech CSE '28</footer>
    </>
  );
}

export default App;
