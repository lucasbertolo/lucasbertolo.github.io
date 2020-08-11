import React from 'react';
import { mainIcons } from '../../core/sources';

const Footer = ({ timeout }) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    {mainIcons.map(icon => (
      <React.Fragment key={icon.type}>
        <a
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={icon.type}
        >
          <span className={`icon fa-${icon.type} social`} />
        </a>
      </React.Fragment>
    ))}
  </footer>
);

export default Footer;
