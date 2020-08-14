import React from 'react';

export const InfoImage = ({ src }) => (
  <section className="info-image">
    <figure>
      <img src={src} alt="website-preview" />
    </figure>
  </section>
);
