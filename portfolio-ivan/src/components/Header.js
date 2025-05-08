// src/components/Header.js

import React from 'react';
import './../styles/Header.css'; // Si planeas usar estilos específicos

const Header = () => {
  return (
    <header className="header">
      <h1>Mi Portafolio Profesional</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
