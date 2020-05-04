/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */

import React from 'react';

const Header = ({ onOpenArticle, timeout }) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-bolt" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Lucas Bertolo</h1>
        <p>Desenvolvedor Web</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle('intro');
            }}
          >
            Currículo
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle('work');
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle('about');
            }}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle('contact');
            }}
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
