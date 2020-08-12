import React from 'react';

import History from '../Intro/History';
import Work from '../Work/Work';
import About from '../About/About';
import Contact from '../Contact/Contact';

class Main extends React.PureComponent {
  render() {
    const {
      onCloseArticle,
      timeout,
      article,
      articleTimeout,
      onSubmit,
      resetInput,
      sendStatus,
    } = this.props;

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
      >
        <article
          id="intro"
          className={`${article === 'intro' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {article === 'intro' && <History close={close} />}
        </article>

        <article
          id="work"
          className={`${article === 'work' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Work close={onCloseArticle} />
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
}

export default Main;
