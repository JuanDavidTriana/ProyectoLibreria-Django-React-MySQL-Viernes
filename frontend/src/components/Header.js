import React from "react";
import '../styles/styleHeader.css'
import logo from '../images/logo.png'
import logo2 from '../images/logo2.svg'
import logo3 from '../images/header_govco.png'

const Header = () => {
    return (
        <header className="header">
            <div className="top-bar">
                <img src= {logo3} alt="Logo GOV" className="logo-gov" />
            </div>
            <nav className="navbar">
                <div className="logo">
                    <img src= {logo} alt="Logo TIC" className="logo-tic" />
                    <img src= {logo2} alt="Logo Talento TECH" className="logo-tech" />
                </div>
                <ul className="nav-links">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#talento-tech">¿Qué es Talento TECH?</a></li>
                    <li><a href="#inscribete">¡Inscríbete!</a></li>
                    <li><a href="#historias">Historias</a></li>
                    <li><a href="#faq">Preguntas Frecuentes</a></li>
                    <li><a href="#bootcamps">Bootcamps en región</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header