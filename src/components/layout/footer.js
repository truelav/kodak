import React from 'react';

import './footer.css'
import logo from '../../assets/images/icons/logo.jpg';

export const Footer = () => {
  const x = 1;

  return <section className="footerSection">
    <div className="footerContainer">
      <div className="footerInnerContainer">
          <div className="logo">
            <img src={logo} alt="Todoist" className="headerLogo" />
          </div>
      </div>
      <div className="footerInnerContainer">
        <ul className="footerList">
          <li className="footerListA">
            Sizes
          </li>
          <li className="footerListB">
            2.1" x 3.4"
          </li>
          <li className="footerListB">
            3.0" x 3.0"
          </li>
          <li className="footerListB">
            4.0" x 6.0"
          </li>
        </ul>
      </div>
      <div className="footerInnerContainer">
        <ul className="footerList">
          <li className="footerListA">
            Categories
          </li>
          <li className="footerListB">
            Photo Papers
          </li>
          <li className="footerListB">
            Wireless Printers
          </li>
          <li className="footerListB">
            Instant Print Cameras
          </li>
        </ul>
      </div>
      <div className="footerInnerContainer">
        <ul className="footerList">
          <li className="footerListA">
            Menu
          </li>
          <li className="footerListB">Home</li>
          <li className="footerListB">Products</li>
          <li className="footerListB">Contact</li>
        </ul>
      </div>
    </div>
    <div className="footerCopyrightContainer">
      <p> Copyright © 2020 ESI Cameras Company. All Rights Reserved. </p>
    </div>
  </section>
}
