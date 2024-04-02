import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navigation from './components/avixa/Navigation';

// import React from 'react'

export const Home = () => {
  return (
    <div>Home</div>
  )
}


export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter basename=''>
        <h1>Component Library</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avixa" element={<Navigation />} />
          {/* routes begin with # with the HashRouter */}



        </Routes>
      </HashRouter>
    </>
  );
}
