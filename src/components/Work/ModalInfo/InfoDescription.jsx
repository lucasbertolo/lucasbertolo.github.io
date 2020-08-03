import React from 'react';

export const InfoDescription = ({ name, description }) => (
  <section className="info-description">
    <h3>Projeto: </h3>
    <p>{name}</p>
    <h3>Descrição: </h3> <p>{description}</p>
  </section>
);
