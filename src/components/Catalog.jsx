import React from 'react';
import products from '../productsData';
import { Link } from 'react-router-dom';
import './styles/Catalog.css';

const Catalog = () => {
    return (
        <div className="catalog">
            <h2>Каталог товаров</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product-link">
                        <div className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <h3>{product.title}</h3>
                            <p>{product.price} ₽</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Catalog;