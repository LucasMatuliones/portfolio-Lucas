
import { useState } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import './App.css'

export default function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="portfolio-dark">
      <nav className="navbar">
        <div className="nav-content">
          <h2>LM</h2>
          <div className="nav-links">
            <button onClick={() => setCurrentSection('home')}>Home</button>
            <button onClick={() => setCurrentSection('about')}>Sobre</button>
            <button onClick={() => setCurrentSection('projects')}>Projetos</button>
            <button onClick={() => setCurrentSection('contact')}>Contato</button>
          </div>
        </div>
      </nav>

      {currentSection === 'home' && (
        <header className="hero">
          <h1>Lucas Henrique Matuliones</h1>
          <p>Desenvolvedor Full Stack</p>
        </header>
      )}

      {currentSection === 'about' && (
        <section className="about">
          <h2>Sobre Mim</h2>
          <p>Desenvolvedor apaixonado por tecnologia e inovação, com experiência em desenvolvimento web full stack.</p>
          <div className="skills">
            <h3>Habilidades</h3>
            <div className="skill-grid">
              <div className="skill-card">Python</div>
              <div className="skill-card">JavaScript</div>
              <div className="skill-card">React</div>
              <div className="skill-card">Node.js</div>
              <div className="skill-card">HTML5</div>
              <div className="skill-card">CSS3</div>
              <div className="skill-card">Git</div>
              <div className="skill-card">SQL</div>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'projects' && (
        <section className="projects">
          <h2>Projetos</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>OrangePY</h3>
              <p>Projeto desenvolvido em Python para análise de dados e automação</p>
              <a href="https://github.com/LucasMatuliones/OrangePY" target="_blank" rel="noopener noreferrer">Ver projeto</a>
            </div>
            <div className="project-card">
              <h3>ANALISADOR_LEXICO</h3>
              <p>Analisador léxico desenvolvido em Python</p>
              <a href="https://github.com/LucasMatuliones/ANALISADOR_LEXICO" target="_blank" rel="noopener noreferrer">Ver projeto</a>
            </div>
            <div className="project-card">
              <h3>Projeto Pokémon</h3>
              <p>Aplicação web utilizando a API de Pokémon</p>
              <a href="https://github.com/LucasMatuliones/projeto-pokemon" target="_blank" rel="noopener noreferrer">Ver projeto</a>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'contact' && (
        <section className="contact">
          <h2>Contato</h2>
          <div className="contact-info">
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <p>Email: lucashenrique1782@gmail.com</p>
            </div>
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <p>Telefone: (11) 93210-0684</p>
            </div>
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <a href="https://github.com/LucasMatuliones" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
