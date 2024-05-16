import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Card from './pages/Card/Card';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

import './index.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Card' element={<Card />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
};

export default App;
