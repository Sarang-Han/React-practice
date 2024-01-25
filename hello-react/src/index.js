import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AttendanceBook from './chap10/AttendanceBook';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>,
);

reportWebVitals();