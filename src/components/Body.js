import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Body = () => (
  <header className="header">
    <span className="header-title">It&apos;s not Perfect... It&apos;s Paradise </span>
    <div className="header-book-btn-space">
      <span className="header-book-btn">
        <Link to="/signin" className="link-sign">Sign In</Link>
      </span>
      <span className="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span className="header-book-btn-signup">
        <Link to="/signup" className="link-sign">Sign Up</Link>
      </span>
    </div>
  </header>
);

export default Body;
