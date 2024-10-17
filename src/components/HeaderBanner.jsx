import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div className="header-banner">
            <header className="header">
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">О нас</Link></li>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li><Link to="/">Где нас найти</Link></li>
                        <li><Link to="/users">Пользователи</Link></li> {/* Новая ссылка */}
                    </ul>
                </nav>
                <div className="logo">
                    <img src="/vite.svg" alt="Logo" />
                </div>
                <div className="auth-buttons">
                    <button className="register">Регистрация</button>
                    <button className="login">Вход</button>
                </div>
            </header>

            <div className="banner">
                <img src="/banner/banner.jpg" alt="Banner" className="banner-image" />
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
