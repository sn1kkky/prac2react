import React from 'react';
import ProductCard from './ProductCard';
import './styles/Catalog.css';

const products = [
    {
        id: 1,
        image: '/catalog/photo.png',
        title: 'Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"',
        price: 335,
    },
    {
        id: 2,
        image: '/catalog/photo.png',
        title: 'Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"',
        price: 335,
    },
    {
        id: 3,
        image: '/catalog/photo.png',
        title: 'Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"',
        price: 335,
    },
    {
        id: 4,
        image: '/catalog/photo.png',
        title: 'Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"',
        price: 335,
    },
    {
        id: 5,
        image: '/catalog/photo.png',
        title: 'Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"',
        price: 335,
    },
    {
        id: 6,
        image: '/catalog/photo.png',
        title: 'Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"',
        price: 335,
    },
];

const Catalog = () => {
    return (
        <div className="catalog">
            <h2 className="catalog-title">Каталог товаров</h2>
            <div className="catalog-filter">
                <h4 className='category-h4'>Категории:</h4>
                <button className="filter-btn">Все товары</button>
                <button className="filter-btn">Шины/Колеса</button>
                <button className="filter-btn">Масла</button>
                <button className="filter-btn">Ароматизаторы</button>
            </div>
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
            <button className="load-more">Загрузить еще товары</button>
        </div>
    );
};

export default Catalog;
