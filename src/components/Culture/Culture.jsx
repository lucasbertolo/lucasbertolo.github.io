/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import brazil from '../../assets/files/brazil-flag.svg';
import england from '../../assets/files/england-flag.svg';
import { CultureContext } from '../../core/resources';

export const Culture = () => {
  const { updateCulture, culture } = useContext(CultureContext);

  const setPortuguese = () => updateCulture('pt_BR');
  const setEnglish = () => updateCulture('en_US');

  return (
    <section className="culture-section fadeIn">
      <img
        src={brazil}
        className={culture === 'pt_BR' ? 'isSelected' : ''}
        alt="brazilian-flag"
        onClick={setPortuguese}
        onKeyPress={setPortuguese}
        aria-label="brazilian-flag-lang"
      />

      <img
        src={england}
        className={culture === 'en_US' ? 'isSelected' : ''}
        alt="england-flag"
        onClick={setEnglish}
        onKeyPress={setEnglish}
        aria-label="setEnglish-flag-lang"
      />
    </section>
  );
};
