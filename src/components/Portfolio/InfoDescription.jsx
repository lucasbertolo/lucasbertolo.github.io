import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';

export const InfoDescription = ({ name, description }) => {
  const { l } = useContext(CultureContext);

  return (
    <section className="info-description">
      <h3>{l('project')}:</h3>
      <p>{name}</p>
      {description && (
        <>
          <h3>{l('description')}:</h3> <p>{description}</p>
        </>
      )}
    </section>
  );
};
