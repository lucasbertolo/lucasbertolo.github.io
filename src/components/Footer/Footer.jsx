import React from 'react';

const Footer = ({ timeout }) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    {icons.map(icon => (
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

const icons = [
  {
    link: 'https://github.com/lucasbertolo',
    type: 'github',
  },
  {
    link: 'https://www.instagram.com/lucas.bertolo2/',
    type: 'instagram',
  },
  {
    link: 'https://www.facebook.com/lucas.bertolo2',
    type: 'facebook',
  },
  {
    link: 'https://www.linkedin.com/in/lucasbertolo2/',
    type: 'linkedin',
  },
  {
    link: 'https://api.whatsapp.com/send?phone=5519996211991',
    type: 'whatsapp',
  },
];
