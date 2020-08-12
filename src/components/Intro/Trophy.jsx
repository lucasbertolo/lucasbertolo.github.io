import React from 'react';
import trophy from '../../assets/images/trophy.jpg';

export const Trophy = () => (
  <div className="nonVisible">
    <figure className="trophy-fig">
      <img
        className="bounceInLeft"
        src={trophy}
        alt="trophy"
        aria-label="trophy"
      />
    </figure>
  </div>
);
