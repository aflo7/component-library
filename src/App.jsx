import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { default as AvixaNavigation } from './components/avixa/Navigation';
import { default as VistaNavigation } from './components/vista/Navigation';

// import React from 'react'

export const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <Link to="/avixa">
        <div className="home-link">Avixa Navigation Component</div>
      </Link>

      <Link to="/vista">

      <div className="home-link">Vista Navigation Component</div>
      </Link>

    </div>
  );
};

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter basename="">
        <h1>Component Library</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avixa" element={<AvixaNavigation />} />
          <Route path="/vista" element={<VistaNavigation />} />

          {/* routes begin with # with the HashRouter */}
        </Routes>
      </HashRouter>
    </>
  );
}
