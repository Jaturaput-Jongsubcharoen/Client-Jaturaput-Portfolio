import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './containers/NavigationBar';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;