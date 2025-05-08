import React from 'react';
import './../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Iván. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
