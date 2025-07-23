import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed-top shadow-sm container-navbar">
      <nav className="navbar navbar-expand-md  navbar-dark-custom container">
        <img className="ps-4" src="./src/assets/img/logo.svg" alt="Logo" />

        <button
          className="navbar-toggler me-4"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#hero" onClick={() => setIsOpen(false)}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#ideas" onClick={() => setIsOpen(false)}>Descarga nuestra app</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#cta" onClick={() => setIsOpen(false)}>Seguridad</a>
            </li>
            <li className="nav-item pe-5">
              <a className="nav-link fw-semibold" href="#benefits" onClick={() => setIsOpen(false)}>Beneficios</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
