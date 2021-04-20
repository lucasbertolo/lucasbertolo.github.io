import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Layout from '../components/layout';
import Main from '../components/Main/Main';
import { CultureProvider } from '../core/resources';
import { Culture } from '../components/Helpers/Culture';

const IndexPage = ({ location }) => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timer, setTimer] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');

  const handleCloseArticle = () => {
    setArticleTimeout(false);

    setTimeout(() => {
      setTimer(false);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(false);
      setArticle('');
    }, 350);
  };

  const handleOpenArticle = name => {
    setIsArticleVisible(true);
    setArticle(name);

    setTimeout(() => {
      setTimer(true);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(true);
    }, 350);
  };

  useEffect(() => {
    setTimeout(() => setLoading(''), 250);
  }, []);

  return (
    <Layout location={location}>
      <div
        className={`body ${loading} ${
          isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <CultureProvider>
          {article === '' && <Culture />}

          <div id="wrapper">
            <Header onOpenArticle={handleOpenArticle} timeout={timer} />

            <Main
              isArticleVisible={isArticleVisible}
              timeout={timer}
              articleTimeout={articleTimeout}
              article={article}
              onCloseArticle={handleCloseArticle}
            />

            <Footer timeout={timer} />
          </div>

          <div id="bg" />
        </CultureProvider>
      </div>
    </Layout>
  );
};

export default IndexPage;
