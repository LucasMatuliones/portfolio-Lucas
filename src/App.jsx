
import './App.css'

export default function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>John Doe</h1>
        <p>Full Stack Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>Passionate developer with expertise in building web applications using Python (Django, Flask) and JavaScript (React, Node.js) technologies.</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-grid">
          <div className="skill-card">Python</div>
          <div className="skill-card">Django</div>
          <div className="skill-card">Flask</div>
          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js</div>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>E-Commerce Platform</h3>
            <p>Built with Django and React</p>
          </div>
          <div className="project-card">
            <h3>Task Manager API</h3>
            <p>Developed using Flask and Node.js</p>
          </div>
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Created with React</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Contact me at: contact@example.com</p>
      </footer>
    </div>
  )
}
