import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';

export const InfoAction = ({ link, github }) => {
  const { l } = useContext(CultureContext);

  return (
    <section className="info-action">
      {!!github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="github"
        >
          <span className="icon fa-github social" />
        </a>
      )}

      <a href={link} target="_blank" rel="noopener noreferrer">
        <button type="button">{l('visitWebsite')}</button>
      </a>
    </section>
  );
};
