import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';

export const ErrorPage = ({ kind }) => {
  const { l } = useContext(CultureContext);
  return (
    <section className="page_404">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">{kind}</h1>
        </div>
        <div className="main-message">
          <span>
            <h3>{l('mainErrorMsg')}</h3>
            <p>{l('subErrorMsg')}</p>
          </span>
          <a href="https://lucasbertolo.github.io/" className="link_404">
            <button type="button">{l('goHome')}</button>
          </a>
        </div>
      </div>
    </section>
  );
};
