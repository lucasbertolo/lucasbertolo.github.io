import React from 'react';

export const Social = () => (
  <ul className="icons">
    {icons.map(icon => (
      <React.Fragment key={icon.type}>
        <li>
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`icon fa-${icon.type}`}
            aria-label={icon.type}
          >
            <span className="label">{icon.type}</span>
          </a>
        </li>
      </React.Fragment>
    ))}
  </ul>
);

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
    link: 'https://www.linkedin.com/in/lucasbertolo2/',
    type: 'linkedin',
  },
];
