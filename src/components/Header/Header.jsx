import React from 'react';

const Header = ({ onOpenArticle, timeout }) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-bolt" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Lucas Bertolo</h1>
        <p>Desenvolvedor de Sistemas</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <span
            role="presentation"
            onClick={() => {
              onOpenArticle('intro');
            }}
          >
            Currículo
          </span>
        </li>
        <li>
          <span
            role="presentation"
            onClick={() => {
              onOpenArticle('work');
            }}
          >
            Portfolio
          </span>
        </li>
        <li>
          <span
            role="presentation"
            onClick={() => {
              onOpenArticle('about');
            }}
          >
            Sobre
          </span>
        </li>
        <li>
          <span
            role="presentation"
            onClick={() => {
              onOpenArticle('contact');
            }}
          >
            Contato
          </span>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
