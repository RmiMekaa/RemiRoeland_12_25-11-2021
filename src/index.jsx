import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/main.scss';

import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Profile from './pages/Profile/Profile';
import ComingSoon from './pages/ComingSoon/ComingSoon'
import HomePage from './pages/HomePage/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <SideMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

