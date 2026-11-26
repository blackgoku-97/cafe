"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#menu", label: "El menú" },
  { href: "#nosotros", label: "Nuestra historia" },
  { href: "#visitanos", label: "Encuéntranos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="Café Bruma, inicio">
        <span className="brand-mark" aria-hidden="true">b.</span>
        <span className="brand-name">café bruma</span>
      </a>
      <nav
        className={`main-nav${isOpen ? " main-nav-open" : ""}`}
        id="main-navigation"
        aria-label="Navegación principal"
      >
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-link" href="#visitanos">
        Ven a visitarnos <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
