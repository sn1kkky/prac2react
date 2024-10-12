import React from 'react';
import ProductCard from './ProductCard';
import './styles/Catalog.css';

const Catalog = ({ products }) => {
    return (
        <div className="catalog">
            <h2 className="catalog-title">Каталог товаров</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalog;