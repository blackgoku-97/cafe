const menuItems = [
  {
    name: "Flat white",
    category: "Café de especialidad",
    description: "Doble espresso y leche sedosa, en su punto justo.",
    price: "$3.800",
    image:
      "https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=900&q=85",
    tag: "Favorito",
  },
  {
    name: "Tostada de estación",
    category: "De nuestra cocina",
    description: "Pan de masa madre, palta fresca y un toque de limón.",
    price: "$6.200",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    tag: "De temporada",
  },
  {
    name: "Roll de canela",
    category: "Recién horneado",
    description: "Suave por dentro, doradito por fuera. Siempre casero.",
    price: "$3.200",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=85",
    tag: "Hecho aquí",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <p>Proyecto ficticio · Café Bruma</p>
        <p className="announcement-hours">Horario de ejemplo · Lun–Sáb, 8:00–19:00</p>
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="Café Bruma, inicio">
          <span className="brand-mark" aria-hidden="true">b.</span>
          <span className="brand-name">café bruma</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#menu">El menú</a>
          <a href="#nosotros">Nuestra historia</a>
          <a href="#visitanos">Encuéntranos</a>
        </nav>
        <a className="header-link" href="#visitanos">
          Ven a visitarnos <ArrowIcon />
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Café de especialidad, sin apuro</p>
          <h1>Un buen café <em>cambia todo.</em></h1>
          <p className="hero-description">
            Café de origen, algo rico recién hecho y un rincón para quedarte.
            Qué bueno que llegaste.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">Descubre el menú <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#nosotros">Conoce Bruma <ArrowIcon /></a>
          </div>
          <div className="hero-note">
            <span className="note-stars" aria-label="5 de 5 estrellas">★★★★★</span>
            <span>Un concepto de cafetería · datos de muestra</span>
          </div>
        </div>
        <div className="hero-visual">
          <div
            className="hero-photo"
            role="img"
            aria-label="Interior acogedor de una cafetería con luz cálida"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=90')",
            }}
          />
          <div className="photo-caption">
            <span className="caption-dot" />
            <span>Tostado fresco, todos los días</span>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>BUEN CAFÉ</span>
            <span className="stamp-star">✳</span>
            <span>BUEN DÍA</span>
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Algo para cada antojo</p>
            <h2>De la barra <em>a tu mesa.</em></h2>
          </div>
          <a className="text-link menu-all-link" href="#visitanos">
            Ven por tu favorito <ArrowIcon />
          </a>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article className="menu-card" key={item.name}>
              <div
                className={`menu-image menu-image-${index + 1}`}
                role="img"
                aria-label={item.name}
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <span className="menu-tag">{item.tag}</span>
              </div>
              <div className="menu-card-copy">
                <div className="menu-card-topline">
                  <p className="menu-category">{item.category}</p>
                  <span className="menu-price">{item.price}</span>
                </div>
                <h3>{item.name}</h3>
                <p className="menu-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-footnote">Menú, productos y precios ficticios; solo para mostrar el concepto.</p>
      </section>

      <section className="story-section" id="nosotros">
        <div className="story-ornament" aria-hidden="true">✳</div>
        <p className="eyebrow">Un lugar para hacer una pausa</p>
        <h2>Creemos que las cosas buenas <em>merecen su tiempo.</em></h2>
        <p className="story-copy">
          Elegimos cada grano con cariño, trabajamos con productores que admiramos
          y horneamos cada mañana. Lo demás pasa alrededor de la mesa.
        </p>
        <a className="story-link" href="#visitanos">Pasa, la puerta está abierta <span aria-hidden="true">→</span></a>
      </section>

      <section className="visit-section" id="visitanos">
        <div className="visit-copy">
          <p className="eyebrow">Ubicación ficticia</p>
          <h2>Tu mesa <em>te espera.</em></h2>
          <p className="visit-intro">Esta cafetería es un proyecto conceptual, no un local real.</p>
          <div className="visit-details">
            <div>
              <span className="detail-label">Dirección de muestra</span>
              <p>Calle de la Niebla 123<br />Barrio Imaginario</p>
            </div>
            <div>
              <span className="detail-label">Horario de muestra</span>
              <p>Lunes a sábado<br />8:00 – 19:00</p>
            </div>
          </div>
          <span className="button button-dark">Ubicación por definir</span>
        </div>
        <div className="visit-image-wrap">
          <div
            className="visit-image"
            role="img"
            aria-label="Taza de café preparada con arte latte"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85')",
            }}
          />
          <div className="visit-image-note">Hecho con cariño, servido con calma.</div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#" aria-label="Café Bruma, inicio">
          <span className="brand-mark" aria-hidden="true">b.</span>
          <span className="brand-name">café bruma</span>
        </a>
        <p>Un buen café. Un buen momento.</p>
        <span className="copyright">Proyecto ficticio · información de muestra</span>
      </footer>
    </main>
  );
}
