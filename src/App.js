import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Navigation from './routes/navigation/Navigation';
import AuthPage from './routes/authpage/AuthPage';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

function App() {
  return (
    <Routes> 
      <Route path='/' element={ <Navigation />}> 
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} /> 
        <Route path='auth' element={<AuthPage />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>


  );
}

export default App;
