import './App.css';
import { HashRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { default as AvixaNavigation } from './components/avixa/Navigation';
import { default as VistaNavigation } from './components/vista/Navigation';
import { default as SerigraphNavigation } from './components/serigraph/Navigation';
import {default as VetsAccessNavigation} from './components/vets-access/Navigation'
import Modal from './components/modal/Modal';
import {default as KeyBankNavigation} from './components/keybank/Navigation'
import {default as BunzlNavigation} from './components/bunzl/Navigation'

import {default as ZollNavigation} from './components/zoll/Navigation'




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

      <Link to="/serigraph">
        <div className="home-link">Serigraph Navigation Component</div>
      </Link>

      <Link to="/vets-access">
        <div className="home-link">Vets Access LLC Navigation Component</div>
      </Link>

      <Link to="/modal">
        <div className="home-link">Modal Component</div>
      </Link>

      <Link to="/keybank">
        <div className="home-link">Keybank Navigation Component</div>
      </Link>
      <Link to="/bunzl">
        <div className="home-link">Bunzl Footer Component</div>
      </Link>

      <Link to="/zoll">
        <div className="home-link">Zoll Navigation Component</div>
      </Link>
    </div>
  );
};

export default function App() {
  return (
    <>
      <HashRouter basename="">
        <h1>Component Library</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avixa" element={<AvixaNavigation />} />
          <Route path="/vista" element={<VistaNavigation />} />
          <Route path="/serigraph" element={<SerigraphNavigation />} />
          <Route path="/vets-access" element={<VetsAccessNavigation />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/keybank" element={<KeyBankNavigation />} />
          <Route path="/bunzl" element={<BunzlNavigation />} />
          <Route path="/zoll" element={<ZollNavigation />} />
        </Routes>
      </HashRouter>
    </>
  );
}
