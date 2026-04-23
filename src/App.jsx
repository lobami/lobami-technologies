import { useState, useEffect, useRef } from 'react';
import './styles.css';

// =========== ICONS ===========
const Icon = {
  Code: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Stack: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  Cloud: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  ),
  Shield: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  ArrowUpRight: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>
  ),
};

// =========== NAV ===========
function Nav({ onOpenPalette }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark">L</span>
          <span>lobami<span style={{ color: 'var(--text-3)' }}>.lat</span></span>
        </a>
        <div className="nav-links">
          <a href="#services"><span className="idx">01</span> servicios</a>
          <a href="#work"><span className="idx">02</span> trabajo</a>
          <a href="#process"><span className="idx">03</span> proceso</a>
          <a href="#stack"><span className="idx">04</span> stack</a>
        </div>
        <div className="nav-cta">
          <button className="cmd-k" onClick={onOpenPalette}>
            <span>buscar</span>
            <kbd>⌘K</kbd>
          </button>
          <a href="#contact" className="btn btn-primary">
            iniciar proyecto <Icon.Arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}

// =========== TERMINAL ===========
function Terminal({ typed }) {
  const full = 'npx create-lobami-app my-project';
  return (
    <div className="terminal">
      <div className="terminal-head">
        <span className="tdot r" />
        <span className="tdot y" />
        <span className="tdot g" />
        <span className="terminal-title">~/lobami — zsh — 92×24</span>
      </div>
      <div className="terminal-body">
        <div className="tline">
          <span className="tprompt">$</span>
          <span>{typed}<span className="tcursor" /></span>
        </div>
        {typed.length >= full.length && (
          <>
            <div className="tline" style={{ marginTop: 12 }}>
              <span className="tcomment">// inicializando stack productivo...</span>
            </div>
            <div className="tline">
              <span style={{ color: 'var(--success)' }}>✓</span>
              <span>Next.js 15 + TypeScript configurado</span>
            </div>
            <div className="tline">
              <span style={{ color: 'var(--success)' }}>✓</span>
              <span>Postgres + Drizzle ORM listo</span>
            </div>
            <div className="tline">
              <span style={{ color: 'var(--success)' }}>✓</span>
              <span>CI/CD conectado a <span className="tpath">main</span></span>
            </div>
            <div className="tline">
              <span style={{ color: 'var(--success)' }}>✓</span>
              <span>Observabilidad y logs centralizados</span>
            </div>
            <div className="tline" style={{ marginTop: 12 }}>
              <span className="tprompt">→</span>
              <span>
                <span className="tkey">ready</span> en <span className="tnum">2.4s</span>{' '}
                — <span className="tstring">"vamos al grano"</span>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// =========== HERO ===========
function Hero() {
  const [typed, setTyped] = useState('');
  const full = 'npx create-lobami-app my-project';

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          <span className="pill">v2.0</span>
          <span>Aceptando proyectos para Q3 2026</span>
          <Icon.Arrow />
        </div>

        <h1>
          Ingeniería que <span className="serif">piensa</span> antes de codear.
        </h1>

        <p className="hero-sub">
          Lobami es un estudio técnico que diseña, construye y escala software para empresas
          que viven o mueren por su producto. Backends sólidos, interfaces rápidas, entregas sin drama.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Agendar llamada <Icon.ArrowUpRight />
          </a>
          <a href="#work" className="btn btn-secondary">
            Ver portafolio
          </a>
        </div>

        <Terminal typed={typed} />
      </div>

      <div className="container logos">
        <div className="logos-label">// productos que hemos construido</div>
        <div className="logos-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <a className="logo-item" href="https://saldy.xyz" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'center' }}>
            <span style={{ fontSize: 17, fontWeight: 600 }}>◆ Saldy</span>
            <span style={{ fontSize: 11, color: 'var(--text-3)' }}>FINTECH · Finanzas personales</span>
          </a>
          <a className="logo-item" href="https://rutaabierta.xyz" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'center' }}>
            <span style={{ fontSize: 17, fontWeight: 600 }}>◉ Ruta Abierta</span>
            <span style={{ fontSize: 11, color: 'var(--text-3)' }}>COMMUNITY · Exploración</span>
          </a>
          <a className="logo-item" href="https://nudo.my" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'center' }}>
            <span style={{ fontSize: 17, fontWeight: 600 }}>⬡ Nudo</span>
            <span style={{ fontSize: 11, color: 'var(--text-3)' }}>PRODUCTIVITY · Gestión de trabajo</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// =========== SERVICES ===========
function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">01 — Servicios</div>
            <h2 className="section-title">Lo que hacemos.<br />Sin fluff.</h2>
          </div>
          <p className="section-desc">
            Nos enfocamos en tres áreas donde podemos mover la aguja: producto digital de cero a producción,
            sistemas que tienen que escalar, e infraestructura que no se cae a las 3am.
          </p>
        </div>

        <div className="services">
          <div className="service span-4">
            <div className="service-idx">S/01</div>
            <div className="service-icon"><Icon.Code /></div>
            <h3>Producto digital end-to-end</h3>
            <p>Desde discovery hasta deploy. Web apps, dashboards internos y SaaS que realmente se usan.</p>
            <div className="service-viz">
              <div style={{ color: 'var(--text-3)' }}>// product.ts</div>
              <div><span style={{ color: '#c9a0ff' }}>export</span> <span style={{ color: 'var(--info)' }}>type</span> <span style={{ color: 'var(--accent)' }}>Deliverable</span> = {'{'}</div>
              <div style={{ paddingLeft: 16 }}>discovery: <span style={{ color: 'var(--success)' }}>'2 semanas'</span>,</div>
              <div style={{ paddingLeft: 16 }}>mvp: <span style={{ color: 'var(--success)' }}>'4–6 semanas'</span>,</div>
              <div style={{ paddingLeft: 16 }}>iteraciones: <span style={{ color: '#c9a0ff' }}>'continuas'</span>,</div>
              <div style={{ paddingLeft: 16 }}>handoff: <span style={{ color: 'var(--success)' }}>true</span></div>
              <div>{'}'}</div>
            </div>
            <div className="service-tags">
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Tailwind</span>
            </div>
          </div>

          <div className="service span-2">
            <div className="service-idx">S/02</div>
            <div className="service-icon"><Icon.Stack /></div>
            <h3>Backend & APIs</h3>
            <p>Servicios que respetan tu presupuesto y tu SLA. REST, GraphQL o event-driven.</p>
            <div className="service-tags">
              <span className="tag">Node</span>
              <span className="tag">Go</span>
              <span className="tag">Postgres</span>
            </div>
          </div>

          <div className="service span-2">
            <div className="service-idx">S/03</div>
            <div className="service-icon"><Icon.Cloud /></div>
            <h3>Cloud & DevOps</h3>
            <p>Infraestructura como código, pipelines de deploy y observabilidad desde el día uno.</p>
            <div className="service-tags">
              <span className="tag">AWS</span>
              <span className="tag">Terraform</span>
              <span className="tag">Docker</span>
            </div>
          </div>

          <div className="service span-2">
            <div className="service-idx">S/04</div>
            <div className="service-icon"><Icon.Zap /></div>
            <h3>Performance audit</h3>
            <p>Diagnóstico profundo de tu stack, cuellos de botella y plan de acción en 7 días.</p>
            <div className="service-tags">
              <span className="tag">Lighthouse</span>
              <span className="tag">Profiling</span>
            </div>
          </div>

          <div className="service span-2">
            <div className="service-idx">S/05</div>
            <div className="service-icon"><Icon.Shield /></div>
            <h3>Consultoría técnica</h3>
            <p>Acompañamos a tu CTO o equipo con arquitectura, reviews y decisiones críticas.</p>
            <div className="service-tags">
              <span className="tag">Arquitectura</span>
              <span className="tag">Code review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========== WORK VISUALS ===========
function WorkVisualDashboard({ accent, title }) {
  return (
    <div className="viz-dashboard">
      <div className="viz-tab">
        <span className="d" style={{ background: '#ff5f57' }} />
        <span className="d" style={{ background: '#febc2e' }} />
        <span className="d" style={{ background: '#28c840' }} />
        <span className="t">{title}</span>
      </div>
      <div style={{ padding: '14px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-3)' }}>$ status</div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, boxShadow: `0 0 6px ${accent}`, display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text-2)' }}>live</span>
          </div>
        </div>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ background: 'var(--bg-1)', border: '1px solid var(--border-1)', borderRadius: 6, padding: 10, minHeight: 60 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--text-3)', marginBottom: 6 }}>METRIC/0{i + 1}</div>
            <div style={{ fontSize: 18, fontWeight: 500, color: 'var(--text-0)' }}>
              {['12.4k', '99.98%', '$48k'][i]}
            </div>
            <div style={{ height: 3, marginTop: 8, borderRadius: 2, background: 'var(--bg-3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: ['72%', '94%', '58%'][i], background: accent, borderRadius: 2 }} />
            </div>
          </div>
        ))}
        <div style={{ gridColumn: 'span 3', height: 60, background: 'var(--bg-1)', border: '1px solid var(--border-1)', borderRadius: 6, padding: 8, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
          {Array.from({ length: 32 }).map((_, i) => {
            const h = 10 + Math.abs(Math.sin(i * 0.7 + 2)) * 32 + Math.abs(Math.sin(i * 0.2)) * 8;
            return <div key={i} style={{ flex: 1, height: h, background: i > 24 ? accent : 'var(--border-2)', borderRadius: 1 }} />;
          })}
        </div>
      </div>
    </div>
  );
}

function WorkVisualMobile({ accent }) {
  return (
    <div style={{ width: 160, height: 260, background: 'var(--bg-0)', border: '1px solid var(--border-2)', borderRadius: 20, padding: 10, boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
      <div style={{ height: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 6px', marginBottom: 8 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--text-2)' }}>9:41</span>
        <span style={{ width: 36, height: 5, background: 'var(--bg-3)', borderRadius: 3, display: 'block' }} />
      </div>
      <div style={{ background: 'var(--bg-1)', borderRadius: 12, padding: 12, height: 'calc(100% - 26px)' }}>
        <div style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--mono)', marginBottom: 4 }}>balance</div>
        <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>$4,280<span style={{ color: 'var(--text-3)', fontSize: 14 }}>.50</span></div>
        <div style={{ fontSize: 10, color: accent, fontFamily: 'var(--mono)', marginTop: 2, marginBottom: 14 }}>+12.4% ↑</div>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: '1px solid var(--border-1)' }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-0)' }}>{['Transferencia', 'Suscripción', 'Abono'][i]}</div>
              <div style={{ fontSize: 9, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>{['hace 2h', 'ayer', '3 mar'][i]}</div>
            </div>
            <div style={{ fontSize: 11, fontFamily: 'var(--mono)', color: i === 1 ? 'var(--danger)' : 'var(--success)' }}>
              {['+$420', '−$29', '+$1.2k'][i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkVisualCode({ accent }) {
  return (
    <div style={{ width: '80%', background: 'var(--bg-0)', border: '1px solid var(--border-1)', borderRadius: 8, padding: 16, fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.7 }}>
      <div style={{ color: 'var(--text-3)' }}>// deploy.ts</div>
      <div>
        <span style={{ color: '#c9a0ff' }}>const</span>
        <span style={{ color: 'var(--text-0)' }}> pipeline </span>
        <span style={{ color: 'var(--text-2)' }}>= </span>
        <span style={{ color: '#c9a0ff' }}>await </span>
        <span style={{ color: accent }}>lobami</span>
        <span style={{ color: 'var(--text-1)' }}>.deploy({'{'}</span>
      </div>
      <div style={{ paddingLeft: 16 }}>region: <span style={{ color: 'var(--success)' }}>'us-east-1'</span>,</div>
      <div style={{ paddingLeft: 16 }}>edge: <span style={{ color: '#c9a0ff' }}>true</span>,</div>
      <div style={{ paddingLeft: 16 }}>cdn: <span style={{ color: 'var(--success)' }}>'cloudfront'</span>,</div>
      <div style={{ paddingLeft: 16 }}>db: <span style={{ color: 'var(--success)' }}>'rds-postgres'</span></div>
      <div>{'})'}</div>
      <div style={{ color: 'var(--text-3)', marginTop: 8 }}>→ <span style={{ color: 'var(--success)' }}>ok</span> · 2m 14s</div>
    </div>
  );
}

// =========== WORK ===========
const cases = [
  {
    id: 'mercurio',
    tag: 'FINTECH · 2026',
    title: 'Mercurio — plataforma de pagos B2B',
    desc: 'Rediseñamos el core de transacciones de una fintech mexicana. Redujimos latencia p95 de 1.2s a 180ms y construimos un dashboard unificado para 3 equipos.',
    stack: ['Next.js', 'Go', 'Postgres', 'Kafka'],
    accent: '#ff9a3c',
    feature: true,
    viz: 'dashboard',
    vizTitle: 'mercurio-dashboard.app',
  },
  {
    id: 'forja',
    tag: 'SAAS · 2025',
    title: 'Forja — CRM para fundiciones industriales',
    desc: 'De Excel a SaaS en 14 semanas. Módulos de inventario, cotización y producción con sync offline.',
    stack: ['React', 'Node', 'SQLite'],
    accent: '#7ab8ff',
    viz: 'mobile',
  },
  {
    id: 'helios',
    tag: 'INFRA · 2025',
    title: 'Helios Labs — pipeline de deploys multi-región',
    desc: 'Migración de Heroku a AWS con IaC completo. Reducción de costos del 42% y zero-downtime desde el día uno.',
    stack: ['Terraform', 'AWS', 'Go'],
    accent: '#7ec27e',
    viz: 'code',
  },
];

function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">02 — Trabajo</div>
            <h2 className="section-title">Casos seleccionados.</h2>
          </div>
          <p className="section-desc">
            Una muestra pequeña de lo que hemos enviado a producción. Nombres cambiados donde aplica NDA;
            métricas verificables bajo llamada.
          </p>
        </div>

        <div className="work-grid">
          {cases.map(c => (
            <article key={c.id} className={`work-card ${c.feature ? 'feature' : ''}`}>
              <div className="work-visual" style={{
                background: `radial-gradient(ellipse at 30% 20%, ${c.accent}22, transparent 60%), var(--bg-2)`
              }}>
                {c.viz === 'dashboard' && <WorkVisualDashboard accent={c.accent} title={c.vizTitle} />}
                {c.viz === 'mobile' && <WorkVisualMobile accent={c.accent} />}
                {c.viz === 'code' && <WorkVisualCode accent={c.accent} />}
              </div>
              <div className="work-body">
                <div className="work-meta"><span>{c.tag}</span></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="work-foot">
                  <div className="work-stack">
                    {c.stack.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                  <span className="work-cta">ver caso <span className="arr"><Icon.ArrowUpRight /></span></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========== PROCESS ===========
const steps = [
  { n: '01', t: 'Discovery', d: 'Entendemos el problema antes de proponer solución. Workshops, entrevistas y benchmark.', time: '1–2 semanas' },
  { n: '02', t: 'Arquitectura', d: 'Diseño técnico, stack, estimados realistas y plan por hitos. Sin sorpresas.', time: '3–5 días' },
  { n: '03', t: 'Build', d: 'Sprints de 2 semanas, demos cada viernes, acceso a repo y Linear desde el día uno.', time: '4–12 semanas' },
  { n: '04', t: 'Launch & Handoff', d: 'Deploy a producción, docs, runbooks y transferencia real al equipo interno.', time: '1 semana' },
  { n: '05', t: 'Operación', d: 'On-call opcional, mejoras continuas y roadmap trimestral. Tú decides hasta dónde.', time: 'mensual' },
];

function Process() {
  return (
    <section className="section" id="process" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">03 — Proceso</div>
            <h2 className="section-title">5 pasos.<br />Cero humo.</h2>
          </div>
          <p className="section-desc">
            Trabajamos en ciclos cortos con visibilidad total. Puedes cancelar al final de cualquier sprint
            —aunque nunca ha pasado.
          </p>
        </div>

        <div className="process">
          <div className="process-row process-head">
            <div>Fase</div>
            <div>Nombre</div>
            <div>Qué pasa</div>
            <div style={{ textAlign: 'right' }}>Duración</div>
          </div>
          {steps.map(s => (
            <div className="process-row" key={s.n}>
              <div className="process-num">{s.n}</div>
              <div className="process-title">{s.t}</div>
              <div className="process-desc">{s.d}</div>
              <div className="process-time">{s.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========== STACK ===========
const stackGroups = [
  { k: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Astro'] },
  { k: 'Backend', items: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Kafka'] },
  { k: 'Infra', items: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Vercel'] },
  { k: 'Tooling', items: ['Linear', 'GitHub', 'Sentry', 'Grafana', 'Datadog', 'Figma'] },
];

function Stack() {
  return (
    <section className="section" id="stack" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">04 — Stack</div>
            <h2 className="section-title">Herramientas que elegimos<br />con cuidado.</h2>
          </div>
          <p className="section-desc">
            No somos religiosos con ningún framework, pero sí exigentes. Esto es lo que usamos a diario
            porque nos deja dormir tranquilos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--border-1)', border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden' }}>
          {stackGroups.map((g, gi) => (
            <div key={g.k} style={{ background: 'var(--bg-1)', padding: '28px 24px', minHeight: 280 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20, display: 'flex', justifyContent: 'space-between' }}>
                <span>{g.k}</span>
                <span>0{gi + 1}</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {g.items.map((it, i) => (
                  <li key={it} style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--text-1)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: 'var(--text-3)', fontSize: 11 }}>{String(i + 1).padStart(2, '0')}</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========== CTA ===========
function CTA() {
  return (
    <section className="container" id="contact">
      <div className="cta-block">
        <div className="cta-inner">
          <div className="section-label">// let&apos;s build</div>
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>
            Respondemos en menos de 24 horas hábiles. Si encaja, armamos una llamada de 30 minutos
            sin obligación para entender el problema y proponer siguiente paso.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="mailto:hola@lobami.lat" className="btn btn-primary">
              hola@lobami.lat <Icon.ArrowUpRight />
            </a>
            <a href="#" className="btn btn-secondary">
              Agendar en Cal.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========== FOOTER ===========
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-mark">L</span>
              <span>lobami<span style={{ color: 'var(--text-3)' }}>.lat</span></span>
            </div>
            <p>Estudio de ingeniería enfocado en producto digital. Remoto, con base en Latinoamérica. Construimos software que el equipo interno puede seguir operando.</p>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#services">Producto digital</a></li>
              <li><a href="#services">Backend &amp; APIs</a></li>
              <li><a href="#services">Cloud &amp; DevOps</a></li>
              <li><a href="#services">Consultoría</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li><a href="#work">Portafolio</a></li>
              <li><a href="#process">Proceso</a></li>
              <li><a href="#">Manifiesto</a></li>
              <li><a href="#">Carreras</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li><a href="mailto:hola@lobami.lat">hola@lobami.lat</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">X / Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Lobami Technologies · Todos los derechos reservados</div>
          <div className="footer-status">
            <span className="status-dot" />
            <span>Todos los sistemas operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =========== COMMAND PALETTE ===========
function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const items = [
    { group: 'Navegación', label: 'Ir a Servicios', hint: '↵', href: '#services' },
    { group: 'Navegación', label: 'Ir a Portafolio', hint: '↵', href: '#work' },
    { group: 'Navegación', label: 'Ir a Proceso', hint: '↵', href: '#process' },
    { group: 'Navegación', label: 'Ir a Stack', hint: '↵', href: '#stack' },
    { group: 'Acción', label: 'Enviar email a hola@lobami.lat', hint: '↵', href: 'mailto:hola@lobami.lat' },
    { group: 'Acción', label: 'Copiar email', hint: '⌘C', action: () => navigator.clipboard?.writeText('hola@lobami.lat') },
    { group: 'Social', label: 'Abrir GitHub', hint: '↗', href: '#' },
    { group: 'Social', label: 'Abrir LinkedIn', hint: '↗', href: '#' },
  ];

  const filtered = items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
      if (e.key === 'Enter') {
        e.preventDefault();
        const it = filtered[active];
        if (it?.href) { window.location.href = it.href; onClose(); }
        if (it?.action) { it.action(); onClose(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, active, filtered, onClose]);

  if (!open) return null;

  const groups = {};
  filtered.forEach(it => { (groups[it.group] = groups[it.group] || []).push(it); });

  let idx = -1;
  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette" onClick={e => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="palette-input"
          placeholder="Buscar o ejecutar comando..."
          value={query}
          onChange={e => { setQuery(e.target.value); setActive(0); }}
        />
        <div className="palette-list">
          {Object.keys(groups).length === 0 && (
            <div style={{ padding: 20, color: 'var(--text-3)', fontFamily: 'var(--mono)', fontSize: 13, textAlign: 'center' }}>
              No hay resultados.
            </div>
          )}
          {Object.entries(groups).map(([g, list]) => (
            <div key={g}>
              <div className="palette-group-label">{g}</div>
              {list.map(it => {
                idx++;
                const a = idx;
                return (
                  <div
                    key={it.label}
                    className={`palette-item ${a === active ? 'active' : ''}`}
                    onMouseEnter={() => setActive(a)}
                    onClick={() => {
                      if (it.href) window.location.href = it.href;
                      if (it.action) it.action();
                      onClose();
                    }}
                  >
                    <span>{it.label}</span>
                    <span className="kbd-hint">{it.hint}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========== APP ===========
function hexToRgba(hex, a) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', '#ff9a3c');
    r.style.setProperty('--accent-dim', '#b86b26');
    r.style.setProperty('--accent-soft', hexToRgba('#ff9a3c', 0.12));
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen(o => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Stack />
        <CTA />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
