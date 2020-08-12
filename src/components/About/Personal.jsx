import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';

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
      </div>
      <h5>{l('local')}</h5>
      <p>Piracicaba - SP, Brasil</p>

      <h5>{l('goal')}</h5>
      <p>Desenvolvedor Web, Mobile, Front-end</p>
    </section>
  );
};
