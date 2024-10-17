import React, { useState } from 'react'; // Убираем лишние импорты
import products from '../productsData';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Catalog.css';

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [modalProduct, setModalProduct] = useState(null); // Используем только один раз useState

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const navigate = useNavigate();

    const handleOrderClick = (product) => {
        setModalProduct(product);
    };

    const closeModal = () => {
        setModalProduct(null);
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="catalog container">
            <div className="header-container">
                <h2 className="title">Каталог товаров</h2>
                <Link to="/" className="home-button">Вернуться на главную</Link>
            </div>

            <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {filteredProducts.length > 0 ? (
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div
                            className="product-card"
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                            />
                            <h3>{product.title}</h3>
                            <p>{product.price} ₽</p>
                            {product.stock > 0 ? (
                                <button
                                    className="add-to-cart-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/product/${product.id}`);
                                    }}
                                >
                                    В корзину
                                </button>
                            ) : (
                                <button
                                    className="order-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOrderClick(product);
                                    }}
                                >
                                    Заказать
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    Товар с названием "{searchTerm}" не найден
                </div>
            )}

            {modalProduct && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h3>Заказать {modalProduct.title}</h3>
                        <form>
                            <input type="text" placeholder="Ваше имя" required />
                            <input type="text" placeholder="Ваш телефон" required />
                            <button type="submit">Отправить заявку</button>
                        </form>
                        <button className="close-button" onClick={closeModal}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Catalog;
