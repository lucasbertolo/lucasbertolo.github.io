import React from 'react';

export const InfoAction = ({ link }) => (
  <section className="info-action">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button type="button">Ir para o site</button>
    </a>
  </section>
);
