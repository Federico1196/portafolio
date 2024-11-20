import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Websites from "./pages/Websites";
import WebApp from "./pages/WebApps";
import DataPro from "./pages/DataPro";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const websitesRef = useRef(null);
  const webAppsRef = useRef(null);
  const dataProRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "websites":
        websitesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "webapps":
        webAppsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "dataprojects":
        dataProRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Router>
        <Navbar scrollToSection={scrollToSection} />
        <Home />
        <div ref={websitesRef}>
          <Websites />
        </div>
        <div ref={webAppsRef}>
          <WebApp />
        </div>
        <div ref={dataProRef}>
          <DataPro />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
