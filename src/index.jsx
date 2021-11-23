import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Profile from './pages/Profile/Profile';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <SideMenu /> 
      <Routes>
        <Route path="/user/:id" element={<Profile/>} />
        <Route path="/user/:id/today-score" element={<Profile/>} />
        <Route path="/user/:id/activity" element={<Profile/>} />
        <Route path="/user/:id/average-sessions" element={<Profile/>} />
        <Route path="/user/:id/activities" element={<Profile/>} />
        <Route path="/user/:id/key-data" element={<Profile/>} />
        <Route path="/user/:id/key-data" element={<Profile/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

