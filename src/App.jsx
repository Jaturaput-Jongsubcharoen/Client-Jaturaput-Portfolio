import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BentoGridDesignPage from './pages/BentoGridDesignPage';
import BentoGridDesignBackup1 from './pages/BentoGridDesignBackup1';
import BentoGridDesignBackup2 from './pages/BentoGridDesignBackup2';
import BentoGridDesignBackup3 from './pages/BentoGridDesignBackup3';
import MovieAddictPage from './pages/MovieAddictPage';
import HamburgerNav from './components/nav/HamburgerNav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BentoGridDesignPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Bento-Grid-Design" element={<BentoGridDesignPage />} />
        <Route path="/Bento-Grid-Design-backup1" element={<BentoGridDesignBackup1 />} />
        <Route path="/Bento-Grid-Design-backup2" element={<BentoGridDesignBackup2 />} />
        <Route path="/Bento-Grid-Design-backup3" element={<BentoGridDesignBackup3 />} />
        <Route path="/Movie-Addict" element={<MovieAddictPage />} />
        <Route path="/hamburger-nav" element={<HamburgerNav />}/>
      </Routes>
    </Router>
  );
}

export default App;