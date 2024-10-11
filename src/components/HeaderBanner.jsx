import React from 'react';
import './styles/HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div className="header-banner">
            <header className="header">
                <nav>
                    <ul className="nav-links">
                        <li>О нас</li>
                        <li>Каталог</li>
                        <li>Где нас найти</li>
                    </ul>
                </nav>
                <div className="logo">
                    <img src="../../public/vite.svg" alt="Logo" />
                </div>
                <div className="auth-buttons">
                    <button className="register">Регистрация</button>
                    <button className="login">Вход</button>
                </div>
            </header>

            <div className="banner">
                <img src="../../public/banner/banner.jpg" alt="Banner" className="banner-image" />
                <button className="about-button">
                    <span className='first-text'>
                        О компании      
                    </span>
                    <span className='second-text'>
                        АвтоТорг
                    </span>
                </button>
            </div>
        </div>
    );
};

export default HeaderBanner;
