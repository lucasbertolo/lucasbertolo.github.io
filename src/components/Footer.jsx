import React from 'react';

const Footer = ({ timeout }) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    <a
      href="https://github.com/lucasbertolo"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label="github"
    >
      <span className="icon fa-github social" />
    </a>
    <a
      href="https://www.instagram.com/lucas.bertolo2/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label="instagram"
    >
      <span className="icon fa-instagram social" />
    </a>
    <a
      href="https://www.facebook.com/lucas.bertolo2"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label="facebook"
    >
      <span className="icon fa-facebook social" />
    </a>
    <a
      href="https://www.linkedin.com/in/lucasbertolo2/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label="linkedin"
    >
      <span className="icon fa-linkedin social" />
    </a>
    <a
      href="https://api.whatsapp.com/send?phone=5519996211991"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label="whatsapp"
    >
      <span className="icon fa-whatsapp social" />
    </a>
  </footer>
);

export default Footer;
