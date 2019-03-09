import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    	<a href='https://github.com/lucasbertolo' target="_blank" rel="noreferrer" className='social-link'><span className="icon fa-github social"></span></a>
    	<a href='https://www.instagram.com/lucas.bertolo2/' target="_blank" rel="noreferrer" className='social-link'><span className="icon fa-instagram social"></span></a>
    	<a href='https://www.facebook.com/lucas.bertolo2' target="_blank" rel="noreferrer" className='social-link'><span className="icon fa-facebook social"></span></a>
    	<a href='https://www.linkedin.com/in/lucasbertolo2/' target="_blank" rel="noreferrer" className='social-link'><span className="icon fa-linkedin social"></span></a>
    	<a href='https://api.whatsapp.com/send?phone=5519996211991' target="_blank" rel="noreferrer" className='social-link'><span className="icon fa-whatsapp social"></span></a>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
