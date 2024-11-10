import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Websites from './pages/Websites';
import WebApp from './pages/WebApps';
import DataPro from './pages/DataPro';
import { useRef } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
    const websitesRef = useRef(null);

    const scrollToWebsites = () => {
        if (websitesRef.current) {
        websitesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <>
      <Router>
        <Navbar scrollToWebsites={scrollToWebsites} />
        <Home />
        <div ref={websitesRef}>
            <Websites />
            <WebApp />
            <DataPro />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;