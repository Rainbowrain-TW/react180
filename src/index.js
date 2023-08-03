import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './index.css';
import Day1 from './components/day1/day';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Day1 />} />
      <Route path="/day1" element={<Day1 />} />
    </Routes>
  </Router>
);

