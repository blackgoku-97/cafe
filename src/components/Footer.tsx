import { ArrowUpRight, Coffee, MapPin } from "lucide-react";

const footerLinks = [
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nuestra historia" },
  { href: "#visitanos", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#" aria-label="Café Bruma, inicio">
          <span className="brand-mark" aria-hidden="true">b.</span>
          <span className="brand-name">café bruma</span>
        </a>
        <p className="footer-slogan">
          <Coffee size={16} strokeWidth={1.6} aria-hidden="true" />
          Un buen café. Un buen momento.
        </p>
        <nav className="footer-nav" aria-label="Navegación del pie de página">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>
        <a className="footer-location" href="#visitanos">
          <MapPin size={15} strokeWidth={1.7} aria-hidden="true" />
          Barrio Imaginario
          <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
        </a>
      </div>
      <p className="copyright">Proyecto ficticio · información de muestra</p>
    </footer>
  );
}
