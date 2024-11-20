import React from 'react';
import '../styles/Navbar.css';

function Navbar({ scrollToSection }) {
  return (
    <div className="navbar">
      <h1><a href="/portafolio">Federico Urraca</a></h1>
      <div className="center-nav">
        <a onClick={() => scrollToSection('websites')} style={{ cursor: 'pointer' }}>Websites</a>
        <a onClick={() => scrollToSection('webapps')} style={{ cursor: 'pointer' }}>Web Applications</a>
        <a onClick={() => scrollToSection('dataprojects')} style={{ cursor: 'pointer' }}>Data Projects</a>
      </div>
    </div>
  );
}

export default Navbar;