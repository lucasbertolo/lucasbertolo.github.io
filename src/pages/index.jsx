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
  const [sendStatus, setSendStatus] = useState('');
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

  const resetInput = () => {
    const contactName = document.querySelector('#name');
    const contactMessage = document.querySelector('#message');
    const contactEmail = document.querySelector('#email');

    contactName.value = '';
    contactMessage.value = '';
    contactEmail.value = '';
  };

  const onSubmit = () => {
    const contactName = document.querySelector('#name');
    const contactMessage = document.querySelector('#message');
    const contactEmail = document.querySelector('#email');

    if (
      contactEmail.value.length === 0 ||
      contactName.value.length === 0 ||
      contactMessage.value.length === 0
    ) {
      setSendStatus('Campo vazio!!');
    } else {
      setSendStatus('Enviando ...');

      fetch('https://dry-island-26655.herokuapp.com/contactLucasBertolo', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: contactEmail.value,
          message: contactMessage.value,
          name: contactName.value,
        }),
      })
        .then(response => response.json())
        .then(message => {
          if (message) {
            setSendStatus('Enviada com sucesso!!');

            contactName.value = '';
            contactMessage.value = '';
            contactEmail.value = '';
          }
        })
        .catch(() => {
          setSendStatus('Algo deu errado, tente novamente mais tarde');
        });
    }
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
            onSubmit={onSubmit}
            resetInput={resetInput}
            sendStatus={sendStatus}
          />
          <Footer timeout={timer} />
        </div>
        <div id="bg" />
      </div>
    </Layout>
  );
};

export default IndexPage;
