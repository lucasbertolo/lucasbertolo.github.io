import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';

const tabs = ['history', 'portfolio', 'about', 'contact'];

const Header = ({ onOpenArticle, timeout }) => {
  const { l } = useContext(CultureContext);

  const handleArticles = id => () => {
    onOpenArticle(id);
  };

  return (
    <header id="header" style={timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fa-leaf" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Lucas Bertolo</h1>
          <p>{l('webDev')}</p>
        </div>
      </div>
      <nav>
        <ul>
          {tabs.map(tab => (
            <li key={tab}>
              <span role="presentation" onClick={handleArticles(tab)}>
                {l(tab)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
