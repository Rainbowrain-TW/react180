import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import { days } from './days.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="react180/" element={React.createElement(days[1])} />
      {
        Object.entries(days).map(([key, value]) => {
          const Component = value;
          return (
            <Route key={key} path={`react180/day${key}`} element={<Component />} />
          );
        })
      }
    </Routes>
  </Router>
);

