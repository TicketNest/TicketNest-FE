import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import GoodsList from './pages/GoodsList';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* <Route path="/goods" element={<GoodsList />} /> */}
      <Route path="/goods/:id" element={<GoodsList/>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
