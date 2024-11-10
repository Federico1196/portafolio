import React from 'react';
import "../styles/Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="socialMedia">
                  <a href="https://github.com/Federico1196"> <GitHubIcon /> </a>
                  <a href="https://www.linkedin.com/in/federico-urraca/"> <LinkedInIcon /> </a>
                  <a href="https://www.instagram.com/federicalf7/"> <InstagramIcon /> </a>
                  
            </div>
            <p> &copy; 2024 Federicourraca.com</p>
        </div>
    </>
  )
}

export default Footer