import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-bolt"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Lucas Bertolo</h1>
                <p>Desenvolvedor Web</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Currículo</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Portfolio</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Sobre</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contato</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
