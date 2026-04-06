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
  'Diseño sobrio, claro y orientado a decisión.',
  'Infraestructura simple, segura y sostenible.',
  'Productos que resuelven un problema real antes de crecer por crecer.'
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-block-lg" />
          </span>
          <strong>Lobami Technologies</strong>
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
          <span className="eyebrow">Studio snapshot</span>
          <h1>Construimos productos claros, útiles y listos para operar.</h1>
          <p className="hero-text">
            Diseñamos experiencias digitales que combinan criterio de producto, ejecución técnica
            sólida y una estética más profesional que ruidosa.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#productos">
              Ver productos
            </a>
            <a className="button button-secondary" href="mailto:hola@lobami.lat">
              Hablar con nosotros
            </a>
          </div>
        </section>

        <section id="productos" className="section">
          <div className="section-heading">
            <span className="eyebrow">Portafolio</span>
            <h2>Productos en operación</h2>
            <p>
              Cada producto responde a un contexto distinto, pero comparte la misma idea central:
              ayudar a la gente a trabajar, decidir o avanzar con menos fricción.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-header">
                  <div>
                    <span className="product-kind">{product.kind}</span>
                    <h3>{product.name}</h3>
                  </div>
                </div>

                <p>{product.description}</p>

                <ul>
                  {product.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="product-header">
                  <a href={product.href} target="_blank" rel="noreferrer">
                    Visitar {product.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="principios" className="section section-split">
          <div className="section-heading">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2>Menos ruido, más criterio.</h2>
            <p>
              Preferimos soluciones claras, stacks mantenibles y decisiones de producto que sí
              sobrevivan cuando el proyecto crece.
            </p>
          </div>

          <div className="principles-card">
            {principles.map((item) => (
              <div key={item} className="principle-row">
                <span className="principle-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <strong>Lobami Technologies</strong>
              <span>Diseño, producto e infraestructura para proyectos digitales bien hechos.</span>
            </div>
            <a className="footer-contact" href="mailto:hola@lobami.lat">hola@lobami.lat</a>
          </div>
          
          <div className="footer-bottom">
            <div className="love-mark">
              Hecho con <span className="heart">❤️</span> en Lobami Technologies
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
