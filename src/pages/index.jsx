import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Layout from '../components/layout';
import Main from '../components/Main/Main';

const IndexPage = ({ location }) => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timer, setTimer] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');
  const [wrapperRef, setWrapperRef] = useState(null);

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setTimer(!timer);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle('');
    }, 350);
  };

  const handleClickOutside = event => {
    if (wrapperRef && wrapperRef.contains(event.current.target)) {
      if (isArticleVisible) {
        handleCloseArticle();
      }
    }
  };

  const handleOpenArticle = name => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(name);

    setTimeout(() => {
      setTimer(!timer);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  useEffect(() => {
    setTimeout(() => setLoading(''), 250);
    document.addEventListener('mousedown', handleClickOutside);

    // eslint-disable-next-line no-unused-expressions
    () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Layout location={location}>
      <div
        className={`body ${loading} ${
          isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timer} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timer}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={timer} />
        </div>
        <div id="bg" />
      </div>
    </Layout>
  );
};

export default IndexPage;
