const products = [
  {
    name: 'Saldy',
    kind: 'Finanzas personales',
    href: 'https://saldy.xyz',
    description:
      'Planeación por quincena, calendario de pagos, metas, alertas y una lectura más clara del flujo personal.',
    bullets: ['Control mensual y quincenal', 'Vista móvil y web', 'Reportes y planeación']
  },
  {
    name: 'Ruta Abierta',
    kind: 'Comunidad y exploración',
    href: 'https://rutaabierta.xyz',
    description:
      'Una plataforma para descubrir rutas, puntos, comunidad y experiencias alrededor del movimiento y la aventura.',
    bullets: ['Rutas y spots', 'Capas sociales', 'Experiencia orientada a comunidad']
  },
  {
    name: 'Nudo',
    kind: 'Gestión visual de trabajo',
    href: 'https://nudo.my',
    description:
      'Un producto para organizar trabajo con claridad, seguimiento visual y un flujo de equipo más ordenado.',
    bullets: ['Tableros y seguimiento', 'Diseño limpio', 'Operación más enfocada']
  }
];

const principles = [
  {
    title: 'Diseño Sobrio',
    desc: 'Orientado a la toma de decisiones críticas sin ruido innecesario.'
  },
  {
    title: 'Infraestructura',
    desc: 'Sistemas simples, seguros y diseñados para una escala sostenible.'
  },
  {
    title: 'Criterio Técnico',
    desc: 'Resolvemos problemas reales con una ejecución técnica de alto nivel.'
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
          <span className="eyebrow">Studio snapshot // 2026</span>
          <h1>Evolucionamos la forma de construir software.</h1>
          <p className="hero-text">
            Lobami Technologies diseña experiencias digitales que combinan criterio de producto con una ejecución técnica de grado industrial.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#productos">
              Ver portafolio
            </a>
            <a className="button button-secondary" href="mailto:hola@lobami.lat">
              Agendar consulta
            </a>
          </div>
        </section>

        <section id="productos" className="section">
          <div className="section-container">
            <div className="section-heading">
              <span className="eyebrow">Deployments</span>
              <h2>Productos activos</h2>
              <p>
                Cada producto es una respuesta técnica a un problema de negocio real, 
                optimizando procesos y reduciendo fricción operativa.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article key={product.name} className="product-card">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href={product.href} className="product-link" target="_blank" rel="noreferrer">
                    Launch
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="principios" className="section">
          <div className="section-container">
            <div className="section-heading">
              <span className="eyebrow">Nuestros Pilares</span>
              <h2>Rigor técnico y estético.</h2>
            </div>

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
            </div>
            <a className="footer-contact" href="mailto:hola@lobami.lat">hola@lobami.lat</a>
          </div>
          
          <div className="footer-bottom">
            <span>© 2026 Digital Production Unit</span>
            <div className="love-mark">
              Hecho con <div className="heart-icon" /> en Lobami
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
