import React from 'react';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.png" alt="Instagram" />
          </a>
          
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
     
    </footer>
  );
}

export default Footer;
