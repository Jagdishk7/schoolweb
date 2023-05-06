import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Nav from 'react-bootstrap/Nav';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer-section">
      <div className="footer-logo">
        <img src="assets/logo.png" alt="logo" />
      </div>

      <div className="footer-product-list">
        <Nav className='flex-column'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </div>

        <div className="footer-socials">
        
          <FacebookIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
        </div>
    </footer>
    </>
  )
}

export default Footer
