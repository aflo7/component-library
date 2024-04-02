import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navigation from './components/avixa/Navigation';

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <h1>Component Library</h1>
        <Routes>
          <Route path="" element={<Navigation />} />
          <Route path="component-library/avixa" element={<Navigation />} />
          <Route path="avixa" element={<Navigation />} />
          <Route path="sss" element={<Navigation />} />



        </Routes>
      </HashRouter>
    </>
  );
}
