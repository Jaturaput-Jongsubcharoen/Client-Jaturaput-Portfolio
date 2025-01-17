import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './containers/NavigationBar';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BentoGridDesignPage from './pages/BentoGridDesignPage';
import MovieAddictPage from './pages/MovieAddictPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Bento-Grid-Design" element={<BentoGridDesignPage />} />
        <Route path="/Movie-Addict" element={<MovieAddictPage />} />
      </Routes>
    </Router>
  );
}

export default App;