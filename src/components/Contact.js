import React from 'react';

const Contact = (props) => (
	<div>
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
              <li><input type="submit" value="Enviar Mensagem" className="special" onClick={props.onSubmit} /></li>
              <li><input type="reset" value="Limpar" onClick={props.resetInput}/></li>
              <li><h3 style={{marginTop: '10px'}}>{props.sendStatus}</h3></li>
            </ul>
          </div>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/lucas-bertolo-97515492/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">Linkedin</span></a></li>
            <li><a href="https://www.facebook.com/lucas.bertolo2" className="icon fa-facebook" target="_blank" rel="noopener noreferrer"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/lucas.bertolo2/" className="icon fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/lucasbertolo" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">GitHub</span></a></li>
          </ul>
          {props.close}
	</div>
)

export default Contact;