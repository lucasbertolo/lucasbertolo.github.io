import React from 'react';

export const InfoImage = ({ label, src }) => (
  <section className="info-image">
    <figure>
      <img src={src} alt="website-preview" />
      <figcaption>{label}</figcaption>
    </figure>
  </section>
);
