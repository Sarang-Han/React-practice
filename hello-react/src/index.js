import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProfileCard from './chap13/ProfileCard';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>,
);

reportWebVitals();