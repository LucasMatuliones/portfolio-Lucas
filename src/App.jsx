
import { useState, useEffect } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import './App.css'

export default function App() {
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio-dark">
      <nav className="navbar">
        <div className="nav-content">
          <h2>Lucas Henrique Matuliones Martins</h2>
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
          <div className="typing-container">
            <h1 className="typing-text">Desenvolvedor Full Stack</h1>
          </div>
          <div className="hero-content">
            <p className="sub-intro">Criando soluções inovadoras e funcionais para a web</p>
            <div className="tech-stack">
              <div className="tech-icon">React</div>
              <div className="tech-icon">Node.js</div>
              <div className="tech-icon">Python</div>
              <div className="tech-icon">TypeScript</div>
            </div>
          </div>
        </header>
      )}

      {currentSection === 'about' && (
        <section className="about">
          <h2>Sobre Mim</h2>
          <p>Sou um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras que fazem a diferença. Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam no mundo digital, e desde então venho me dedicando a aperfeiçoar minhas habilidades tanto no desenvolvimento front-end quanto back-end.</p>
          
          <p>Tenho experiência significativa em desenvolvimento web, com foco em criar aplicações robustas e intuitivas. Minha abordagem combina criatividade com metodologias ágeis, sempre buscando as melhores práticas de desenvolvimento e mantendo-me atualizado com as últimas tendências tecnológicas.</p>
          
          <p>Além das habilidades técnicas, valorizo muito o trabalho em equipe e a comunicação efetiva. Acredito que os melhores resultados são alcançados quando combinamos expertise técnica com colaboração e pensamento criativo.</p>
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
              <div className="skill-card">TypeScript</div>
              <div className="skill-card">MongoDB</div>
              <div className="skill-card">Docker</div>
              <div className="skill-card">AWS</div>
              <div className="skill-card">Next.js</div>
              <div className="skill-card">Redux</div>
              <div className="skill-card">Express.js</div>
              <div className="skill-card">REST APIs</div>
              <div className="skill-card">Tailwind CSS</div>
              <div className="skill-card">Jest</div>
              <div className="skill-card">CI/CD</div>
              <div className="skill-card">Agile</div>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'projects' && (
        <section className="projects">
          <h2>Projetos</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Sistema de Análise de Dados (OrangePY)</h3>
              <p>Ferramenta empresarial de análise de dados e automação desenvolvida em Python. Otimiza processos de negócio e fornece insights através de análise de dados avançada.</p>
              <a href="https://github.com/LucasMatuliones/OrangePY" target="_blank" rel="noopener noreferrer">Ver projeto</a>
            </div>
            <div className="project-card">
              <h3>Compilador Empresarial</h3>
              <p>Analisador léxico que pode ser adaptado para processar linguagens específicas de domínio empresarial. Ideal para empresas que precisam de processamento de dados estruturados.</p>
              <a href="https://github.com/LucasMatuliones/ANALISADOR_LEXICO" target="_blank" rel="noopener noreferrer">Ver projeto</a>
            </div>
            <div className="project-card">
              <h3>Pokédex Web App</h3>
              <p>Aplicação web que demonstra integração avançada com APIs RESTful, gerenciamento de estado e UI responsiva. Utiliza React com TypeScript e boas práticas de desenvolvimento.</p>
              <a href="https://github.com/LucasMatuliones/Pokedex-js.git" target="_blank" rel="noopener noreferrer">Ver projeto</a>
            </div>
            <div className="project-card">
              <h3>Sistema Financeiro</h3>
              <p>Aplicação Python com interface gráfica para cálculos financeiros. Demonstra capacidade de desenvolver ferramentas empresariais com UI/UX profissional.</p>
              <a href="https://github.com/LucasMatuliones/calculadora-python" target="_blank" rel="noopener noreferrer">Ver projeto</a>
            </div>
            <div className="project-card">
              <h3>Sistema de Monitoramento em Tempo Real</h3>
              <p>Aplicação web para monitoramento em tempo real, demonstrando habilidades em desenvolvimento frontend e manipulação de dados em tempo real.</p>
              <a href="https://github.com/LucasMatuliones/relogio-digital" target="_blank" rel="noopener noreferrer">Ver projeto</a>
            </div>
            <div className="project-card">
              <h3>Automação Web com Selenium</h3>
              <p>Framework de automação web desenvolvido com Python e Selenium para testes automatizados e scraping de dados. Demonstra habilidades em automação e qualidade de software.</p>
              <a href="https://github.com/LucasMatuliones/web-automation" target="_blank" rel="noopener noreferrer">Ver projeto</a>
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
