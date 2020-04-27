import React from 'react';

const About = (props) => (
	<div>
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

          <p>No momento, estou terminando o curso de Análise e Desenvolvimento no Instituto 
          Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP) e buscando oportunidade 
          em trabalhar na área de desenvolvimento web ou relacionados.
          <br/>
          Sempre me interessei em trabalhar com tecnologia. Desde criança, quando via jogos 
          ou sites novos e tecnológicos, ficava motivado em saber como eles eram feitos, como 
          uncionavam. Comparava-os e lia-os sobre as mais diferentes plataformas e imaginava se, 
          algum dia, eu trabalharia nesta área.
          <br/> 
          O tempo foi passando e minha vida acabou tomando outro rumo, acabei adentrando na 
          área de vendas, a qual acabou me trazendo coisas muitas positivas, aprendizados e 
          visões diferentes da vida que eu levava até então. Iniciei um curso de Gestão 
          Empresarial na FATEC em Piracicaba (SP), buscando aprofundar meus conhecimentos 
          neste novo mundo que eu vivenciava. 
          <br />
          Foi então que surgiu a oportunidade de voltar ao meu antigo hobby e comecei o curso 
          na IFSP, trabalhei na Orange T.I. como Analista de Suporte e aprendi muito sobre 
          hardware e servidores.
          <br/>
          Passado isso, tive a chance de aprimorar meu inglês através de um intercâmbio para a 
          Irlanda. Além do idioma, conheci outras culturas, com modos e pensamentos totalmente diferentes 
          dos nossos, e busquei agregar isso à minha personalidade.
          <br/>
          Voltei para minha cidade, onde estou terminando o meu curso na IFSP, venho fazendo 
          alguns projetos por conta própria na área em que eu mais me identifico e possuo 
          interesse – desenvolvimento de aplicações web. Tenho alguns trabalhos prontos, 
          outros em mente e muita vontade de buscar algo novo para continuar aprendendo.
          <br/><br/>
          </p>
          
          {props.close}
	</div>
);

export default About;