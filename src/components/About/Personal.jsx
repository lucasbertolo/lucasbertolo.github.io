import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';
import dev from '../../assets/images/desenvolvedor-web.png';

export const Personal = () => {
  const { l } = useContext(CultureContext);

  return (
    <section className="personal-info">
      <h3>{l('personalInfo')}</h3>

      <div className="row">
        <span>
          <h5>{l('name')}</h5>
          <p>Lucas Bertolo</p>
        </span>
        <span>
          <h5>{l('age')}</h5>
          <p>28</p>
        </span>
        <span>
          <figure>
            <img src={dev} alt="desenvolvedor-web" />
          </figure>
        </span>
      </div>
      <h5>{l('local')}</h5>
      <p>Piracicaba - SP, Brasil</p>

      <h3>{l('goal')}</h3>
      <h3 className="keywords">
        <a
          href="https://www.bitdegree.org/tutorials/what-is-a-web-developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="desenvolvedor-web"
        >
          {l('webDev')}
        </a>
        , {l('mobDev')}, {l('frontDev')}
      </h3>
    </section>
  );
};
