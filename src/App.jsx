const products = [
  {
    name: 'Saldy',
    kind: 'Finanzas personales',
    href: 'https://saldy.xyz',
    description:
      'Planeación por quincena, calendario de pagos, metas y una lectura clara del flujo personal.',
    tag: 'FINTECH'
  },
  {
    name: 'Ruta Abierta',
    kind: 'Comunidad y exploración',
    href: 'https://rutaabierta.xyz',
    description:
      'Plataforma para descubrir rutas y experiencias alrededor del movimiento y la aventura.',
    tag: 'COMMUNITY'
  },
  {
    name: 'Nudo',
    kind: 'Gestión visual de trabajo',
    href: 'https://nudo.my',
    description:
      'Organización de trabajo con claridad, seguimiento visual y flujo de equipo ordenado.',
    tag: 'PRODUCTIVITY'
  }
];

const principles = [
  {
    title: 'Diseño Crítico',
    desc: 'Orientado a la toma de decisiones sin ruido innecesario.'
  },
  {
    title: 'Infraestructura',
    desc: 'Sistemas seguros y diseñados para una escala sostenible.'
  },
  {
    title: 'Ejecución',
    desc: 'Resolvemos problemas reales con ingeniería de alto nivel.'
  }
];

export default function App() {
  return (
    <div className="site-shell">
      <div className="bg-mesh" aria-hidden="true" />
      
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true" />
          <strong>Lobami</strong>
        </a>

        <nav className="topnav">
          <a href="#productos">Productos</a>
          <a href="#principios">Principios</a>
          <a className="nav-cta" href="mailto:hola@lobami.lat">
            Contacto
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <span className="section-label">Engineering better software</span>
          <h1>Construimos productos digitales de alto rendimiento.</h1>
          <p className="hero-text">
            Combinamos criterio de producto con ejecución técnica de grado industrial para crear experiencias que escalan.
          </p>
        </section>

        <section id="productos" className="section-products">
          <div className="section-container">
            <span className="section-label">Selected Works</span>
            <div className="product-featured-grid">
              {products.map((product) => (
                <article key={product.name} className="product-card">
                  <span className="product-tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href={product.href} className="product-cta" target="_blank" rel="noreferrer">
                    Launch Product
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="principios" className="section-principles">
          <div className="section-container">
            <span className="section-label">Philosophy</span>
            <div className="principles-grid">
              {principles.map((item) => (
                <div key={item.title} className="principle-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
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
            <span>© 2026</span>
            <div className="love-mark">
              HECHO CON <div className="heart-pulse" /> EN LOBAMI 🇲🇽
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
