import React from 'react';

const src =
  'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg';

export const InfoImage = ({ label }) => (
  <section className="info-image">
    <figure>
      <img src={src} alt="website-preview" />
      <figcaption>{label}</figcaption>
    </figure>
  </section>
);
