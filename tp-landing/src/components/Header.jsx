import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Fintech</div>

        <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#benefits" onClick={() => setIsOpen(false)}>Beneficios</a>
          <a href="#cta" onClick={() => setIsOpen(false)}>Abrir Cuenta</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
