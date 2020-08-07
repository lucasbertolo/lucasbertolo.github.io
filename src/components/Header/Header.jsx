import React from 'react';

const Header = ({ onOpenArticle, timeout }) => {
  const handleArticles = id => () => {
    onOpenArticle(id);
  };

  return (
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
          {tabs.map(tab => (
            <li key={tab.id}>
              <span role="presentation" onClick={handleArticles(tab.id)}>
                {tab.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const tabs = [
  {
    id: 'intro',
    label: ' Currículo',
  },
  {
    id: 'work',
    label: 'Portfolio',
  },
  {
    id: 'about',
    label: 'Sobre',
  },
  {
    id: 'contact',
    label: ' Contato',
  },
];
