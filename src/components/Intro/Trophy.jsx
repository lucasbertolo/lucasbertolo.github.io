import React from 'react';
import trophy from '../../assets/images/trophy.png';

export const Trophy = () => (
  <div className="game">
    <figure className="trophy-fig ">
      <img
        className="bounceInLeft"
        src={trophy}
        alt="trophy"
        aria-label="trophy"
      />
    </figure>
  </div>
);
