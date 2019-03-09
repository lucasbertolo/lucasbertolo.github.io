import React from 'react'
import PropTypes from 'prop-types'

// import profile from '';
import pdf from '../assets/resumo.pdf';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resumo</h2>
          <embed src={pdf} type='application/pdf' />
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <div className="container-portfolio">          
            <div className="zone" id="robofriends">
              <span className="background-hover">
                <p><a href="https://lucasbertolo.github.io/robofriends/" target="_blank" rel="noopener noreferrer">Robofriends</a></p>
              </span>
            </div>
            <div className="zone" id="brainth">
              <span className="background-hover">
                <p><a href="https://brainth.herokuapp.com" target="_blank" rel="noopener noreferrer">Face recognition</a></p>
              </span>
            </div>
            <div className="zone" id="gallery">
              <span className="background-hover">
                <p><a href="https://lucasbertolo.github.io/grid-gallery/" target="_blank" rel="noopener noreferrer">Grid gallery</a></p>
              </span>
            </div>
            <div className="zone" id="wordpress">
              <span className="background-hover">
                <p><a href="https://spesviagens.home.blog" target="_blank" rel="noopener noreferrer">Wordpress</a></p>
              </span>
            </div>
            <div className="zone" id="cage">
              <span className="background-hover">
                <p><a href="https://lucasbertolo.github.io/cage-the-elephant/" target="_blank" rel="noopener noreferrer">Cage the Elephant</a></p>
              </span>
            </div>           
          </div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sobre</h2>
          <span className="image main"><img src='https://al8cddccn.cloudimg.io/cdn/n/webp-lossy-70.jpg-lossy-70/i.imgur.com/BRnuPnw.jpg' alt="" /></span>
          <p>Meu nome e Lucas Bertolo, tenho 27 anos, paulista e atual morador de Piracicaba. <br/><br/></p>

          <h3>Pessoal</h3>
          <p>Estou terminando o curso de Análise e Desenvolvimento no Instituto Federal de São Paulo - IFSP e buscando uma oportunidade de trabalho na área de desenvolvimento web ou relacionados.<br/>
          Desejei trabalhar com "tecnologia" desde criança. Via jogos virtuais, sites elaboradissimos, e ficava fissurado em saber como eles eram feitos. Como eles funcionavam, comparando-os, lendo sobre as mais diferentes plataformas. Imaginava se algum dia eu conseguiria trabalhar na área.
          <br/> <br/>
          O tempo foi passando, e minha vida acabou tomando outro rumo, acabei adentrando a área de vendas, esta que acabou me trazendo muitas coisas positivas, aprendizados e visões diferentes da vida que eu levava. <br />
          Comecei um curso de Gestão Empresarial na FATEC - Piracicaba, buscando aprofundar meus conhecimentos neste novo mundo que eu vivenciava. <br/>
          Até que um belo dia, surgiu uma oportunidade de voltar a mexer com meu antigo hobby. Comecei o curso na IFSP, arranjei um trabalho na Orange T.I. de Analista de Suporte, e aprendi bastante coisa sobre máquinas, hardware e servidores. 
          <br /><br/>
          Passado isso, tive a chance de fazer um intercâmbio para a Irlanda para aprimorar meu inglês. Além do inglês, conheci outras culturas, com jeitos e pensamentos totalmente diferentes dos nossos, e busquei agregar isso à minha personalidade.
          <br/><br/>
          Voltei para minha cidade, onde estou terminando minha faculdade, e tenho tentado fazer alguns projetos por conta própria, para a área que eu mais me identifico e tenho interesse, que é o de desenvolvimento de aplicações web.
          Tenho alguns trabalhos prontos, bastante projetos em mente, e muita vontade de buscar algo novo para continuar aprendendo.
          <br/><br/></p>
          <h3>Carreira de desenvolvedor web</h3>
          <p>Ainda preciso de um pouquinho experência, mas acredito que estou no caminho certo. Tenho um bom conhecimento de 
          Javascript, CSS. Também sei React e alguns frameworks dele, como Next.js e Gatsby. Depois de finalizar alguns projetos de curto prazo, quero aprender um pouco mais de Python, Machine Learning e afins.
          <br/><br/>
          Nos projetos atuais, tenho tentado aplicar as melhores práticas, como serem responsivos, webprogressive, implementar redux e code splitting, na busca de melhor performance. 
          Bom, é isso, espero que tenha gostado, eu deixei esse website como um resumo pessoal. Tem meu curriculo, meu contato, meu portfolio. Qualquer coisa manda uma mensagem!!

          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contato</h2>
          <div className="form">
            <div className="field half first">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Enviar Mensagem" className="special" onClick={this.props.onSubmit} /></li>
              <li><input type="reset" value="Limpar" /></li>
              <li><h3 style={{marginTop: '10px'}}>{this.props.sendStatus}</h3></li>
            </ul>
          </div>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/lucas-bertolo-97515492/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/lucas.bertolo2" className="icon fa-facebook" target="_blank" rel="noopener noreferrer"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/lucas.bertolo2/" className="icon fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/lucasbertolo" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
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
  sendStatus: PropTypes.string
}

export default Main

