import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Footer, MenuCatalog, Navbar } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <p>Proyecto ficticio · Café Bruma</p>
        <p className="announcement-hours">Horario de ejemplo · Lun–Sáb, 8:00–19:00</p>
      </div>

      <Navbar />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Café de especialidad, sin apuro</p>
          <h1>Un buen café <em>cambia todo.</em></h1>
          <p className="hero-description">
            Café de origen, algo rico recién hecho y un rincón para quedarte.
            Qué bueno que llegaste.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">
              Descubre el menú <ArrowDown size={15} strokeWidth={1.7} aria-hidden="true" />
            </a>
            <a className="text-link" href="#nosotros">
              Conoce Bruma <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
            </a>
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

      <MenuCatalog />

      <section className="story-section" id="nosotros">
        <div className="story-ornament" aria-hidden="true">✳</div>
        <p className="eyebrow">Un lugar para hacer una pausa</p>
        <h2>Creemos que las cosas buenas <em>merecen su tiempo.</em></h2>
        <p className="story-copy">
          Elegimos cada grano con cariño, trabajamos con productores que admiramos
          y horneamos cada mañana. Lo demás pasa alrededor de la mesa.
        </p>
        <a className="story-link" href="#visitanos">
          Pasa, la puerta está abierta <ArrowUpRight size={14} aria-hidden="true" />
        </a>
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

      <Footer />
    </main>
  );
}
