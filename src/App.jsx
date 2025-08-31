import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BentoGridDesignPage from './pages/BentoGridDesignPage';
import BentoGridDesignBackup1 from './pages/BentoGridDesignBackup1';
import BentoGridDesignBackup2 from './pages/BentoGridDesignBackup2';
import BentoGridDesignBackup3 from './pages/BentoGridDesignBackup3';
import BentoGridDesignBackup4 from './pages/BentoGridDesignBackup4';
import BentoGridDesignBackup5 from './pages/BentoGridDesignBackup5';
import MovieAddictPage from './pages/MovieAddictPage';
import HamburgerNav from './components/nav/HamburgerNav';
import ResponsiveGrid from './components/layout/ResponsiveGrid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BentoGridDesignPage />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bento-grid-design" element={<BentoGridDesignPage />} />
        <Route path="/bento-grid-design-backup1" element={<BentoGridDesignBackup1 />} />
        <Route path="/bento-grid-design-backup2" element={<BentoGridDesignBackup2 />} />
        <Route path="/bento-Grid-design-backup3" element={<BentoGridDesignBackup3 />} />
        <Route path="/bento-Grid-design-backup4" element={<BentoGridDesignBackup4 />} />
        <Route path="/bento-grid-design-backup5" element={<BentoGridDesignBackup5 />} />
        <Route path="/movie-addict" element={<MovieAddictPage />} />
        <Route path="/hamburger-nav" element={<HamburgerNav />}/>
        <Route path="/responsive-grid" element={<ResponsiveGrid />}/>
      </Routes>
    </Router>
  );
}

export default App;