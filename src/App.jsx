import { useState, useEffect } from 'react';

const products = [
  {
    name: 'Saldy',
    kind: 'Finanzas personales',
    href: 'https://saldy.xyz',
    description:
      'Planeación por quincena, calendario de pagos, metas y una lectura clara del flujo personal.',
    tag: 'FINTECH',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
        <path d="M16 8l2-2"/>
        <path d="M8 8L6 6"/>
      </svg>
    )
  },
  {
    name: 'Ruta Abierta',
    kind: 'Comunidad y exploración',
    href: 'https://rutaabierta.xyz',
    description:
      'Plataforma para descubrir rutas y experiencias alrededor del movimiento y la aventura.',
    tag: 'COMMUNITY',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
        <circle cx="12" cy="10" r="2"/>
      </svg>
    )
  },
  {
    name: 'Nudo',
    kind: 'Gestión visual de trabajo',
    href: 'https://nudo.my',
    description:
      'Organización de trabajo con claridad, seguimiento visual y flujo de equipo ordenado.',
    tag: 'PRODUCTIVITY',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M10 6.5h4"/>
        <path d="M17.5 10v4"/>
        <path d="M6.5 10v4"/>
        <path d="M10 17.5h4"/>
      </svg>
    )
  }
];

const principles = [
  {
    title: 'Diseño Crítico',
    desc: 'Orientado a la toma de decisiones sin ruido innecesario.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    )
  },
  {
    title: 'Infraestructura',
    desc: 'Sistemas seguros y diseñados para una escala sostenible.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    title: 'Ejecución',
    desc: 'Resolvemos problemas reales con ingeniería de alto nivel.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  }
];

const processSteps = [
  {
    num: '01',
    title: 'Entender',
    desc: 'Identificamos el problema real antes de escribir una línea de código.'
  },
  {
    num: '02',
    title: 'Diseñar',
    desc: 'Creamos interfaces que comunican claridad y generan confianza.'
  },
  {
    num: '03',
    title: 'Construir',
    desc: 'Desarrollamos con stack moderno, tests y deploy automatizado.'
  },
  {
    num: '04',
    title: 'Medir',
    desc: 'Analizamos métricas para iterar y mejorar continuamente.'
  }
];

const highlights = [
  {
    text: 'Productos propios, no contratos de outsourcing'
  },
  {
    text: 'Stack moderno'
  },
  {
    text: 'Enfoque en UX y rendimiento'
  }
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function LaunchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function ProductMockup({ product }) {
  if (product.name === 'Saldy') {
    return (
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-mockup-svg">
        <rect width="400" height="280" rx="12" fill="var(--mockup-bg)"/>
        <rect x="20" y="20" width="360" height="40" rx="8" fill="var(--mockup-surface)"/>
        <text x="40" y="48" fontFamily="var(--font-sora)" fontSize="14" fontWeight="700" fill="var(--mockup-text)">Saldy</text>
        <rect x="300" y="28" width="60" height="24" rx="6" fill="var(--tech-green)" fillOpacity="0.2"/>
        <text x="330" y="45" fontFamily="var(--font-manrope)" fontSize="11" fontWeight="600" fill="var(--tech-green)" textAnchor="middle">+$1,240</text>
        
        <rect x="20" y="80" width="165" height="90" rx="8" fill="var(--mockup-surface)"/>
        <text x="35" y="100" fontFamily="var(--font-manrope)" fontSize="10" fill="var(--mockup-muted)">Balance</text>
        <text x="35" y="130" fontFamily="var(--font-sora)" fontSize="22" fontWeight="800" fill="var(--mockup-text)">$12,450</text>
        
        <rect x="200" y="80" width="180" height="90" rx="8" fill="var(--mockup-surface)"/>
        <text x="215" y="100" fontFamily="var(--font-manrope)" fontSize="10" fill="var(--mockup-muted)">Goal</text>
        <rect x="215" y="115" width="150" height="8" rx="4" fill="var(--mockup-border)"/>
        <rect x="215" y="115" width="105" height="8" rx="4" fill="var(--tech-blue-bright)"/>
        <text x="215" y="145" fontFamily="var(--font-manrope)" fontSize="12" fontWeight="600" fill="var(--mockup-text)">70% complete</text>
        
        <rect x="20" y="185" width="360" height="75" rx="8" fill="var(--mockup-surface)"/>
        <text x="35" y="205" fontFamily="var(--font-manrope)" fontSize="10" fill="var(--mockup-muted)">Upcoming</text>
        <rect x="35" y="215" width="100" height="30" rx="6" fill="var(--mockup-accent)" fillOpacity="0.1"/>
        <text x="85" y="234" fontFamily="var(--font-manrope)" fontSize="11" fontWeight="600" fill="var(--mockup-accent)" textAnchor="middle">15th · $2,400</text>
        <rect x="145" y="215" width="100" height="30" rx="6" fill="var(--mockup-accent)" fillOpacity="0.1"/>
        <text x="195" y="234" fontFamily="var(--font-manrope)" fontSize="11" fontWeight="600" fill="var(--mockup-accent)" textAnchor="middle">30th · $2,400</text>
      </svg>
    );
  }
  
  if (product.name === 'Ruta Abierta') {
    return (
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-mockup-svg">
        <rect width="400" height="280" rx="12" fill="var(--mockup-bg)"/>
        
        <rect x="20" y="20" width="360" height="50" rx="8" fill="var(--mockup-surface)"/>
        <circle cx="50" cy="45" r="15" fill="var(--tech-cyan)" fillOpacity="0.2"/>
        <circle cx="50" cy="45" r="8" stroke="var(--tech-cyan)" strokeWidth="2"/>
        <text x="75" y="40" fontFamily="var(--font-manrope)" fontSize="10" fill="var(--mockup-muted)">Discover</text>
        <text x="75" y="55" fontFamily="var(--font-sora)" fontSize="14" fontWeight="700" fill="var(--mockup-text)">Rutas Cercanas</text>
        
        <rect x="20" y="85" width="170" height="100" rx="8" fill="var(--mockup-surface)"/>
        <rect x="20" y="85" width="170" height="50" rx="8" fill="var(--tech-blue)" fillOpacity="0.15"/>
        <path d="M60 105 L90 135 L140 85" stroke="var(--tech-blue-bright)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="60" cy="105" r="5" fill="var(--tech-cyan)"/>
        <circle cx="140" cy="85" r="5" fill="var(--tech-cyan)"/>
        <text x="30" y="155" fontFamily="var(--font-manrope)" fontSize="11" fontWeight="600" fill="var(--mockup-text)">Cerro del Borrego</text>
        <text x="30" y="170" fontFamily="var(--font-manrope)" fontSize="10" fill="var(--mockup-muted)">5.2 km · Moderada</text>
        
        <rect x="210" y="85" width="170" height="100" rx="8" fill="var(--mockup-surface)"/>
        <rect x="210" y="85" width="170" height="50" rx="8" fill="var(--tech-green)" fillOpacity="0.15"/>
        <path d="M250 105 L280 135 L330 85" stroke="var(--tech-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="250" cy="105" r="5" fill="var(--tech-cyan)"/>
        <circle cx="330" cy="85" r="5" fill="var(--tech-cyan)"/>
        <text x="220" y="155" fontFamily="var(--font-manrope)" fontSize="11" fontWeight="600" fill="var(--mockup-text)">Cañón del Sumidero</text>
        <text x="220" y="170" fontFamily="var(--font-manrope)" fontSize="10" fill="var(--mockup-muted)">12.8 km · Alta</text>
        
        <rect x="20" y="200" width="360" height="60" rx="8" fill="var(--mockup-surface)"/>
        <circle cx="50" cy="230" r="15" fill="var(--tech-purple)" fillOpacity="0.2"/>
        <text x="75" y="225" fontFamily="var(--font-manrope)" fontSize="10" fill="var(--mockup-muted)">Comunidad</text>
        <text x="75" y="240" fontFamily="var(--font-sora)" fontSize="13" fontWeight="700" fill="var(--mockup-text)">247 exploradores activos</text>
      </svg>
    );
  }
  
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-mockup-svg">
      <rect width="400" height="280" rx="12" fill="var(--mockup-bg)"/>
      
      <rect x="20" y="20" width="360" height="40" rx="8" fill="var(--mockup-surface)"/>
      <text x="40" y="48" fontFamily="var(--font-sora)" fontSize="14" fontWeight="700" fill="var(--mockup-text)">Nudo Board</text>
      <rect x="280" y="30" width="80" height="20" rx="4" fill="var(--tech-blue)" fillOpacity="0.2"/>
      <text x="320" y="44" fontFamily="var(--font-manrope)" fontSize="10" fontWeight="600" fill="var(--tech-blue-bright)" textAnchor="middle">Sprint 14</text>
      
      <rect x="20" y="75" width="110" height="185" rx="8" fill="var(--mockup-surface)"/>
      <text x="35" y="95" fontFamily="var(--font-manrope)" fontSize="10" fontWeight="700" fill="var(--mockup-muted)">TO DO</text>
      <rect x="30" y="110" width="90" height="35" rx="4" fill="var(--mockup-accent)" fillOpacity="0.1"/>
      <rect x="38" y="120" width="50" height="6" rx="3" fill="var(--mockup-accent)"/>
      <rect x="38" y="132" width="74" height="4" rx="2" fill="var(--mockup-border)"/>
      <rect x="30" y="155" width="90" height="35" rx="4" fill="var(--mockup-accent)" fillOpacity="0.1"/>
      <rect x="38" y="165" width="40" height="6" rx="3" fill="var(--mockup-accent)"/>
      <rect x="38" y="177" width="74" height="4" rx="2" fill="var(--mockup-border)"/>
      
      <rect x="145" y="75" width="110" height="185" rx="8" fill="var(--mockup-surface)"/>
      <text x="160" y="95" fontFamily="var(--font-manrope)" fontSize="10" fontWeight="700" fill="var(--mockup-muted)">IN PROGRESS</text>
      <rect x="155" y="110" width="90" height="50" rx="4" fill="var(--tech-blue)" fillOpacity="0.15"/>
      <rect x="163" y="120" width="60" height="6" rx="3" fill="var(--tech-blue-bright)"/>
      <rect x="163" y="132" width="74" height="4" rx="2" fill="var(--mockup-border)"/>
      <rect x="163" y="142" width="50" height="4" rx="2" fill="var(--mockup-border)"/>
      <circle cx="175" cy="155" r="8" fill="var(--tech-blue-bright)" fillOpacity="0.3"/>
      <circle cx="175" cy="155" r="4" fill="var(--tech-blue-bright)"/>
      
      <rect x="270" y="75" width="110" height="185" rx="8" fill="var(--mockup-surface)"/>
      <text x="285" y="95" fontFamily="var(--font-manrope)" fontSize="10" fontWeight="700" fill="var(--tech-green)">DONE</text>
      <rect x="280" y="110" width="90" height="35" rx="4" fill="var(--tech-green)" fillOpacity="0.1"/>
      <rect x="288" y="120" width="45" height="6" rx="3" fill="var(--tech-green)"/>
      <rect x="288" y="132" width="74" height="4" rx="2" fill="var(--mockup-border)"/>
      <path d="M315 142 L320 147 L330 137" stroke="var(--tech-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const savedTheme = localStorage.getItem('lobami-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lobami-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="site-shell">
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true" />
          <strong>Lobami</strong>
        </a>

        <nav className="topnav">
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proceso">Proceso</a>
          <a href="#principios">Principios</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="nav-cta" href="mailto:hola@lobami.lat">
            Contacto
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-inner">
            <div className={`hero-content ${loaded ? 'animate-in' : ''}`}>
              <span className="section-label">Engineering better software</span>
              <h1>Construimos productos digitales de alto rendimiento.</h1>
              <p className="hero-text">
                Combinamos criterio de producto con ejecución técnica de grado industrial para crear experiencias que escalan.
              </p>
              <div className="hero-actions">
                <a href="#productos" className="cta-primary">
                  Ver proyectos <ArrowIcon />
                </a>
                <a href="mailto:hola@lobami.lat" className="cta-secondary">
                  Hablemos <span>→</span>
                </a>
              </div>
            </div>
            <div className={`hero-visual ${loaded ? 'animate-in' : ''}`} style={{ animationDelay: '150ms' }}>
              {products.map((p, i) => (
                <div key={p.name} className={`hero-card hero-card-${i}`}>
                  <div className="hero-card-header">
                    <span className="hero-card-icon">{p.icon}</span>
                    <span className="hero-card-tag">{p.tag}</span>
                  </div>
                  <strong className="hero-card-name">{p.name}</strong>
                  <span className="hero-card-kind">{p.kind}</span>
                  <a href={p.href} className="hero-card-link" target="_blank" rel="noreferrer">
                    Visitar <ArrowIcon />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={`hero-stats ${loaded ? 'animate-in' : ''}`} style={{ animationDelay: '300ms' }}>
            <div className="stat-item">
              <strong>3</strong>
              <span>Productos activos</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>6+</strong>
              <span>Años de experiencia</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>100%</strong>
              <span>Productos propios</span>
            </div>
          </div>
        </section>

        <section id="productos" className="section-products">
          <div className="section-container">
            <span className="section-label">Selected Works</span>
            <div className="product-featured-grid">
              {products.map((product, i) => (
                <article key={product.name} className="product-card" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="product-mockup">
                    <ProductMockup product={product} />
                  </div>
                  <div className="product-card-content">
                    <span className="product-tag">{product.tag}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <a href={product.href} className="product-cta" target="_blank" rel="noreferrer">
                      Launch Product <LaunchIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="section-about">
          <div className="section-container">
            <div className="about-grid">
              <div className="about-image">
                <div className="about-image-content">
                  <svg width="80" height="80" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="128" height="128" rx="24" fill="rgba(0,118,206,0.2)"/>
                    <path d="M40 32V96H56V72H72V96H88V32H72V56H56V32H40Z" fill="#00a3ff"/>
                    <circle cx="96" cy="40" r="12" fill="#00fbff" fill-opacity="0.8"/>
                  </svg>
                  <p>Diseño, producto e infraestructura</p>
                </div>
              </div>
              <div className="about-content">
                <span className="section-label">About Us</span>
                <h2>Somos un equipo enfocado en crear tecnología que importa.</h2>
                <p>
                  En Lobami Technologies construimos productos digitales propios, 
                  lo que nos permite mantener control total sobre la calidad y la visión de cada proyecto.
                </p>
                <p>
                  No hacemos outsourcing. Cada línea de código, cada decisión de diseño 
                  y cada actualización está pensada para crear valor real a nuestros usuarios.
                </p>
                <div className="about-highlights">
                  {highlights.map((h, i) => (
                    <div key={i} className="about-highlight">
                      <div className="about-highlight-icon">
                        <CheckIcon />
                      </div>
                      <span className="about-highlight-text">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="section-process">
          <div className="section-container">
            <span className="section-label">How We Work</span>
            <h2 className="process-title">Un proceso enfocado en resultados</h2>
            <div className="process-grid">
              {processSteps.map((step, i) => (
                <div key={step.num} className="process-item" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="process-num">{step.num}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="principios" className="section-principles">
          <div className="section-container">
            <span className="section-label">Philosophy</span>
            <div className="principles-grid">
              {principles.map((item, i) => (
                <div key={item.title} className="principle-item" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="principle-icon">
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-container">
          <div className="footer-content">
            <div className="footer-brand">
              <strong>Lobami Technologies</strong>
              <p style={{ color: 'var(--tech-muted)', marginTop: '20px' }}>
                Diseño, producto e infraestructura para proyectos digitales bien hechos.
              </p>
            </div>
            <a className="footer-contact" href="mailto:hola@lobami.lat">hola@lobami.lat</a>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
            <div className="love-mark">
              HECHO CON <div className="heart-pulse" /> EN LOBAMI 🇲🇽
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}