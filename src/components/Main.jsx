import React from 'react';

import Intro from './Intro';
import Work from './Work';
import About from './About';
import Contact from './Contact';

class Main extends React.Component {
  render() {
    const {
      onCloseArticle,
      setWrapperRef,
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
      <div ref={setWrapperRef} id="main" style={timeout ? { display: 'flex' } : { display: 'none' }}>

        <article
          id="intro"
          className={`${article === 'intro' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <Intro close={close} />
        </article>

        <article
          id="work"
          className={`${article === 'work' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <Work close={close} />
        </article>

        <article
          id="about"
          className={`${article === 'about' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <About close={close} />
        </article>

        <article
          id="contact"
          className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
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
