import React from 'react';
import { contactIcons } from '../../core/sources';

export const Social = () => (
  <ul className="icons">
    {contactIcons.map(icon => (
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
