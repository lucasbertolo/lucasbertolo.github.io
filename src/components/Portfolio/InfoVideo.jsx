import React from 'react';

export const InfoVideo = ({ src }) => (
  <section className="info-video">
    <video autoPlay muted loop>
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  </section>
);
