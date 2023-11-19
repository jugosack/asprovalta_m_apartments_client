import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import locationImg from '../images/locationImg.png';

import logo from '../images/logo.png'; // Import your image

const Body = () => (
  <>
    <div className="section-1">
      <img className="logoA" src={logo} alt="logo.png" />

      <div className="contacts">
        <div className="phone">
          {/* <FontAwesomeIcon icon={faPhone} className="phone-icon" /> */}
          <span className="phone-label" aria-hidden="true">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          </span>
          <a className="phone-link" href="tel:+38971292496">+389 71 292 496</a>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
          <a className="email-link" href="mailto:asprovaltam@yahoo.com">asprovaltam@yahoo.com</a>
        </div>
        <div className="facebook">
          <a
            href="https://www.facebook.com/asprovaltam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          </a>
        </div>
        <div className="location">
          <a
            href="https://www.google.com/maps/place/Asprovalta+M+Apartments/@40.7240395,23.7063886,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x14a91f22438b3a3d:0xcee56071c2b751c8!2sAsprovalta+M+Apartments,+Leof.+Egnatias,+Asprovalta+570+21,+Greece!2m2!1d23.7089635!2d40.7240355!3m5!1s0x14a91f22438b3a3d:0xcee56071c2b751c8!8m2!3d40.7240355!4d23.7089635!16s%2Fg%2F11h4ql_hpc?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="location-icon" src={locationImg} alt="locationImg.png" />
          </a>

        </div>
      </div>

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
      <span className="header-title">It is&apos;not Perfect... It is Paradise!</span>
      <div className="signature">Asprovalta M Apartments</div>
    </header>

  </>
);

export default Body;
