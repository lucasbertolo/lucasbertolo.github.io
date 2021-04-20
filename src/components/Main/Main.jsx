import React, { useEffect, useRef } from 'react';
import History from '../History/History';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Contact from '../Contact/Contact';

export default function Main(props) {
  const {
    onCloseArticle,
    timeout,
    article,
    articleTimeout,
    onSubmit,
    resetInput,
    sendStatus,
  } = props;

  const ref = useRef(null);

  useEffect(() => {
    const listener = event => {
      if (ref.current && event.target && ref.current.contains(event.target)) {
        return;
      }

      if (article !== '') onCloseArticle();
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, [article]);

  const close = (
    <div
      className="close"
      onClick={onCloseArticle}
      onKeyPress={onCloseArticle}
      role="presentation"
    />
  );

  return (
    <div
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
      ref={ref}
    >
      <article
        id="history"
        className={`${article === 'history' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        {article === 'history' && <History close={close} />}
      </article>

      <article
        id="portfolio"
        className={`${article === 'portfolio' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        {article === 'portfolio' && <Portfolio close={onCloseArticle} />}
      </article>

      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <About close={close} />
      </article>

      <article
        id="contact"
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <Contact
          close={close}
          onSubmit={onSubmit}
          resetInput={resetInput}
          sendStatus={sendStatus}
        />
      </article>
    </div>
  );
}
