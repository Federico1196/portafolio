import React from 'react';
import '../styles/Navbar.css';

function Navbar({ scrollToWebsites }) {
  return (
    <>
      <div className="navbar">
        <h1><a href="/portafolio">Federico Urraca</a></h1>
        <div className="center-nav"> 
          <a onClick={scrollToWebsites} style={{ cursor: 'pointer' }}>Websites</a>
          <a onClick={scrollToWebsites} style={{ cursor: 'pointer' }}>Web Applications</a>
          <a onClick={scrollToWebsites} style={{ cursor: 'pointer' }}>Data Projects</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
