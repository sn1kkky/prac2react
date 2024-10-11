import React from 'react';
import './styles/Footer.css';
import logo from '/vite.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="АвтоТорг Лого" className="footer-logo" />
                <nav className="footer-nav">
                    <a href="#about" className="footer-link">О нас</a>
                    <a href="#catalog" className="footer-link">Каталог</a>
                    <a href="#contact" className="footer-link">Где нас найти</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;