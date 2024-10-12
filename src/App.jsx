import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeaderBanner from './components/HeaderBanner';
import Catalog from './components/Catalog';

const products = [
  {
    id: 1,
    image: '/catalog/photo1.png',
    title: 'Ароматизатор "Кожа и древесина"',
    price: 335,
  },
  {
    id: 2,
    image: '/catalog/photo2.webp',
    title: 'Автодифузор "Арбузный фреш"',
    price: 300,
  },
  {
    id: 3,
    image: '/catalog/photo3.webp',
    title: 'Автодифузор "Акация"',
    price: 250,
  },
  {
    id: 4,
    image: '/catalog/photo4.webp',
    title: 'Автодифузор "Ваниль"',
    price: 350,
  },
  {
    id: 5,
    image: '/catalog/photo5.webp',
    title: 'Автодифузор "Мятный бриз"',
    price: 320,
  },
  {
    id: 6,
    image: '/catalog/photo6.webp',
    title: 'Автодифузор "Сочный гранат с гибискусом"',
    price: 320,
  },
];

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeaderBanner />} />
          <Route path="/catalog" element={<Catalog products={products} />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>

      <Footer />

    </Router>
  );
};

export default App;