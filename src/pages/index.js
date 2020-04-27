import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      sendStatus: ''
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleOpenArticle = (article) =>  {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle = () =>{

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }
  
  resetInput = () => {
    let contactName = document.querySelector('#name');
    let contactMessage = document.querySelector('#message');
    let contactEmail = document.querySelector('#email');

    contactName.value = '';
    contactMessage.value = '';
    contactEmail.value = '';
  }

  onSubmit = () => {  
    let contactName = document.querySelector('#name');
    let contactMessage = document.querySelector('#message');
    let contactEmail = document.querySelector('#email');

    if(contactEmail.value.length === 0 || contactName.value.length === 0 || contactMessage.value.length === 0){
         this.setState({
              sendStatus: "Campo vazio!!"
            })
    } else {    
      this.setState({sendStatus: 'Enviando ...'})
      fetch('https://dry-island-26655.herokuapp.com/contactLucasBertolo', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: contactEmail.value,
          message: contactMessage.value,
          name: contactName.value
        })
      })
        .then(response => response.json())
        .then(message => {
          if(message){
            this.setState({
              sendStatus: "Enviada com sucesso"
            })

            contactName.value = '';
            contactMessage.value = '';
            contactEmail.value = '';
          } 
        })  
        .catch(err => {
          this.setState({
              sendStatus: "Algo deu errado, tente novamente mais tarde"
            })
        }); 
    }   
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              onSubmit={this.onSubmit}
              resetInput={this.resetInput}
              sendStatus={this.state.sendStatus}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
