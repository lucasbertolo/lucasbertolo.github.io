import React from 'react'
import PropTypes from 'prop-types'

import Intro from './Intro';
import Work from './Work';
import About from './About';
import Contact from './Contact';

class Main extends React.Component {

  render() {   

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Intro close={close} />
        </article>        

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
         <Work close={close} />
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
         <About close={close} />
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Contact 
            close={close} 
            onSubmit={this.props.onSubmit}
            resetInput={this.props.resetInput}
            sendStatus={this.props.sendStatus}
            />
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  resetInput: PropTypes.func,
  sendStatus: PropTypes.string
}

export default Main

