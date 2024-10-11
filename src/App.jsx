import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeaderBanner from './components/HeaderBanner';
import Catalog from './components/Catalog';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeaderBanner />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>

      <Footer/>

    </Router>
  );
};

export default App;