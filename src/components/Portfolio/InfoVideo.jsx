import React from 'react';

export const InfoVideo = ({ src }) => (
  <section className="info-video">
    <video autoPlay muted loop>
      <source src={src.webm} type="video/webm" />
      <source src={src.mp4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
);
