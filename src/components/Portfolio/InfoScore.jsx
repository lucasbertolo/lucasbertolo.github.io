import React from 'react';

export const InfoScore = ({ src }) => (
  <>
    <h3>Lighthouse Score:</h3>
    <section className="info-score">
      <figure>
        <img src={src} alt="score" />
      </figure>
    </section>
  </>
);
