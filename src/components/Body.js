import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import logo from '../images/logo.png'; // Import your image

const Body = () => (
  <>
    <div className="section-1">
      <img className="logoA" src={logo} alt="logo.png" />
      <div className="header-book-btn-space">
        <div className="header-book-btn">
          <Link to="/signin" className="link-sign">Sign In</Link>
        </div>
        <span className="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <div className="header-book-btn-signup">
          <Link to="/signup" className="link-signup">Sign Up</Link>
        </div>
      </div>
    </div>
    <header className="header">
      <span className="header-title">It&apos; s not Perfect... It&apos; s Paradise </span>

    </header>

  </>
);

export default Body;
