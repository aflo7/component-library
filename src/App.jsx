import './App.css';
import { HashRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { default as AvixaNavigation } from './components/avixa/Navigation';
import { default as VistaNavigation } from './components/vista/Navigation';
import { default as SerigraphNavigation } from './components/serigraph/Navigation';
import { default as VetsAccessNavigation } from './components/vets-access/Navigation';
import Modal from './components/modal/Modal';
// import { default as KeyBankNavigation } from './components/keybank/Navigation';
// import { default as BunzlNavigation } from './components/bunzl/Navigation';
import Sidebar from './components/sidebar/Sidebar';
import { default as FacebookSidebar } from './components/facebook/Sidebar';
import { default as InnovationCard } from './components/magna/Innovation';

import { default as ZollNavigation } from './components/zoll/Navigation';
import { default as MagnaNavigation } from './components/magna/Navigation';

import { default as CarbonWebButton } from './components/carbonweb/Button';
import { default as BeeHexNavigation } from './components/beehex/Navigation';
import { default as BatteriNavigation } from './components/batterii/Navigation';
import { default as SoharsNavigation } from './components/sohars/Navigation';
import Post from './components/reddit/Post';
import Subscribe from './components/twitter/Subscribe';
import JobPost from './components/linkedin/JobPost';
import { default as FacebookNav } from './components/facebook/Nav';

export const Home = () => {
  return (
    <>
      <h1 className="home-text">Home</h1>
      <div className="home-container">
        <Link className="react-router-link" to="/avixa">
          <div className="home-link">Avixa Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/subscribe">
          <div className="home-link">"Subscribe To Premium" Component</div>
        </Link>

        <Link className="react-router-link" to="/vista">
          <div className="home-link">Vista Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/serigraph">
          <div className="home-link">Serigraph Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/vets-access">
          <div className="home-link">Vets Access LLC Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/modal">
          <div className="home-link">Modal Component</div>
        </Link>

        {/* <Link to="/keybank">
        <div className="home-link">Keybank Navigation Component</div>
      </Link> */}
        {/* <Link to="/bunzl">
        <div className="home-link">Bunzl Footer Component</div>
      </Link> */}

        <Link className="react-router-link" to="/zoll">
          <div className="home-link">Zoll Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/sidebar">
          <div className="home-link">NetJets Sidebar Component</div>
        </Link>

        <Link className="react-router-link" to="/carbon-web">
          <div className="home-link">CarbonWeb Button Component</div>
        </Link>

        <Link className="react-router-link" to="/magna">
          <div className="home-link">Magna Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/beehex">
          <div className="home-link">BeeHex Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/batterii">
          <div className="home-link">Batterii Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/sohars">
          <div className="home-link">Sohars Navigation Component</div>
        </Link>

        <Link className="react-router-link" to="/marketplace">
          <div className="home-link">Marketplace Sidebar Component</div>
        </Link>

        <Link className="react-router-link" to="/facebook/nav">
          <div className="home-link">Facebook Nav Component</div>
        </Link>

        <Link className="react-router-link" to="/innovation-card">
          <div className="home-link">Innovation Card Component</div>
        </Link>

        <Link className="react-router-link" to="/reddit/post">
          <div className="home-link">Reddit Post Component</div>
        </Link>

        <Link className="react-router-link" to="/linkedin/job-post">
          <div className="home-link">LinkedIn Job Post Component</div>
        </Link>
      </div>
    </>
  );
};

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <Link to="/">
        <div className="back-link">Return home</div>
      </Link>
      <div style={{ margin: '1rem' }}>Component not found</div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <HashRouter basename="">
        <h1 className="component-library-header">Component Library</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avixa" element={<AvixaNavigation />} />
          <Route path="/vista" element={<VistaNavigation />} />
          <Route path="/serigraph" element={<SerigraphNavigation />} />
          <Route path="/vets-access" element={<VetsAccessNavigation />} />
          <Route path="/modal" element={<Modal />} />
          {/* <Route path="/keybank" element={<KeyBankNavigation />} /> */}
          {/* <Route path="/bunzl" element={<BunzlNavigation />} /> */}
          <Route path="/zoll" element={<ZollNavigation />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/magna" element={<MagnaNavigation />} />
          <Route path="/carbon-web" element={<CarbonWebButton />} />
          <Route path="/beehex" element={<BeeHexNavigation />} />
          <Route path="/batterii" element={<BatteriNavigation />} />
          <Route path="/sohars" element={<SoharsNavigation />} />
          <Route path="/marketplace" element={<FacebookSidebar />} />

          <Route path="/facebook/nav" element={<FacebookNav />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/reddit/post" element={<Post />} />
          <Route path="/linkedin/job-post" element={<JobPost />} />

          <Route path="/innovation-card" element={<InnovationCard />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}
