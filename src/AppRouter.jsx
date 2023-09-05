import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import GoodsList from './pages/GoodsList.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

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
