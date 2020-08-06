import React from 'react';

export const InfoAction = ({ link, github }) => (
  <section className="info-action">
    {!!github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="github"
      >
        <span className="icon fa-github social" />
      </a>
    )}

    <a href={link} target="_blank" rel="noopener noreferrer">
      <button type="button">Ir para o site</button>
    </a>
  </section>
);
