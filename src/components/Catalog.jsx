import React, { useState } from 'react';
import products from '../productsData';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Catalog.css';

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState(''); // State for sorting
    const [modalProduct, setModalProduct] = useState(null);

    const navigate = useNavigate();

    // Filter by category and search term
    const filteredProducts = products
        .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((product) =>
            selectedCategory ? product.category === selectedCategory : true
        );

    // Sort products based on selected sort option
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        if (sortOption === 'stock-asc') return a.stock - b.stock;
        if (sortOption === 'stock-desc') return b.stock - a.stock;
        return 0;
    });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

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

            {/* Category Filter */}
            <div className="category-filter">
                <button onClick={() => handleCategoryChange('')}>Все категории</button>
                <button onClick={() => handleCategoryChange('Ароматизаторы')}>Ароматизаторы</button>
                <button onClick={() => handleCategoryChange('Диффузоры')}>Диффузоры</button>
            </div>

            {/* Sorting Dropdown */}
            <select onChange={handleSortChange} className="sort-select">
                <option value="">Сортировка</option>
                <option value="price-asc">Цена: по возрастанию</option>
                <option value="price-desc">Цена: по убыванию</option>
                <option value="stock-asc">Остаток: по возрастанию</option>
                <option value="stock-desc">Остаток: по убыванию</option>
            </select>

            <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {sortedProducts.length > 0 ? (
                <div className="product-grid">
                    {sortedProducts.map((product) => (
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
                            <p>Остаток: {product.stock}</p> {/* Display stock */}
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