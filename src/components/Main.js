import React from 'react'
import PropTypes from 'prop-types'

// import profile from '';
import pdf from '../assets/resumo.pdf';
import projects from '../assets/sources';


class Main extends React.Component {
            // <span className="fa-stack fa-lg info">
            //       <i className="fa fa-circle-thin fa-stack-2x"></i>
            //       <i className="fa fa-info fa-stack-1x"></i>
            //     </span>
  render() {
    const website = projects.map((project) =>{
      return(
           <div className="zone" id={project.name} style={{backgroundImage: `url(${project.image})`}} key={project.name}>
              <span className="background-hover">
                <p><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></p>
              </span>
            </div>
        )
    })

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
             {website}
          </div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sobre</h2>
          <span className="image main"><img src='https://al8cddccn.cloudimg.io/cdn/n/webp-lossy-40.jpg-lossy-40/i.imgur.com/BRnuPnw.jpg' alt="" /></span>
          <p>Meu nome e Lucas Bertolo, tenho 27 anos, paulista e atual morador de Piracicaba. <br/><br/></p>

          <h3>Skills</h3>
         <div id="skillspane">
          <div id="skillchart">
            <table>
            <tbody>
              <tr>
                <td>Javascript</td>
                <td>
                  <div className="xpbar" style={{width: '70%', backgroundColor: '#515A47'}}>70%</div>
                </td>
              </tr>
              <tr>
                <td>CSS/SASS</td>
                <td>
                  <div className="xpbar" style={{width: '70%', backgroundColor: '#54C6EB'}}>70%</div>
                </td>
              </tr>
              <tr>
                <td>SQL</td>
                <td>
                  <div className="xpbar" style={{width: '40%', backgroundColor: '#DC851F'}}>40%</div>
                </td>
              </tr>
              <tr>
                <td>Java</td>
                <td>
                  <div className="xpbar" style={{width: '60%', backgroundColor: '#FF6F59'}}>60%</div>
                </td>
              </tr>
              <tr>
                <td>C#</td>
                <td>
                  <div className="xpbar" style={{width: '50%', backgroundColor: '#B2B09B'}}>50%</div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br/>
        <h4>Outras habilidades:</h4><p>
        React - Redux, Next.js, Gatsby.js<br/>
        Node, Express.js<br/>
        PostgreSQL<br/>
        </p>

          <h3>Pessoal</h3>

          <p>Estou terminando o curso de Análise e Desenvolvimento no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP e buscando uma oportunidade de trabalho na área de desenvolvimento web ou relacionados.<br/>
          Sempre fui interessado trabalhar com "tecnologia". Desde criança, quando via jogos ou sites novos e bem "tecnológicos", ficava fissurado em saber como eles eram feitos. Como eles funcionavam, comparando-os, lendo sobre as mais diferentes plataformas. Imaginava se algum dia eu conseguiria trabalhar na área.
          <br/> <br/>
          O tempo foi passando, e minha vida acabou tomando outro rumo, acabei adentrando a área de vendas, esta que acabou me trazendo muitas coisas positivas, aprendizados e visões diferentes da vida que eu levava. <br />
          Comecei um curso de Gestão Empresarial na FATEC - Piracicaba, buscando aprofundar meus conhecimentos neste novo mundo que eu vivenciava. <br/>
          Até que surgiu a oportunidade de voltar a mexer com meu antigo hobby e comecei o curso na IFSP, arranjei um trabalho na Orange T.I. de Analista de Suporte, e aprendi bastante coisa sobre hardware e servidores. 
          <br /><br/>
          Passado isso, tive a chance de fazer um intercâmbio para a Irlanda para aprimorar meu inglês. Além do inglês, conheci outras culturas, com jeitos e pensamentos totalmente diferentes dos nossos, e busquei agregar isso à minha personalidade.
          <br/><br/>
          Voltei para minha cidade, onde estou terminando minha faculdade, e tenho tentado fazer alguns projetos por conta própria, para a área que eu mais me identifico e tenho interesse, que é o de desenvolvimento de aplicações web.
          Tenho alguns trabalhos prontos, bastante projetos em mente, e muita vontade de buscar algo novo para continuar aprendendo.
          <br/><br/></p>
          
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
              <li><input type="reset" value="Limpar" onClick={this.props.resetInput}/></li>
              <li><h3 style={{marginTop: '10px'}}>{this.props.sendStatus}</h3></li>
            </ul>
          </div>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/lucas-bertolo-97515492/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">Linkedin</span></a></li>
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
  resetInput: PropTypes.func,
  sendStatus: PropTypes.string
}

export default Main

