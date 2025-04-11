
import './App.css'

export default function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Lucas Matuliones</h1>
        <p>Desenvolvedor Full Stack</p>
      </header>

      <section className="about">
        <h2>Sobre Mim</h2>
        <p>Desenvolvedor apaixonado com experiência na construção de aplicações web utilizando tecnologias Python (Django, Flask) e JavaScript (React, Node.js).</p>
      </section>

      <section className="skills">
        <h2>Habilidades</h2>
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
        <h2>Projetos</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Plataforma E-Commerce</h3>
            <p>Desenvolvido com Django e React</p>
          </div>
          <div className="project-card">
            <h3>API de Gerenciamento de Tarefas</h3>
            <p>Desenvolvido com Flask e Node.js</p>
          </div>
          <div className="project-card">
            <h3>Site Portfólio</h3>
            <p>Criado com React</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Entre em contato: lucas.matuliones@exemplo.com</p>
      </footer>
    </div>
  )
}
