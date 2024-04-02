import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navigation from './components/avixa/Navigation';

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <h1>Component Library</h1>
        <Routes>
          <Route path="avixa" element={<Navigation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
