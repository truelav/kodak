import React from 'react';

import './header.css'
import logo from '../../assets/images/icons/logo.jpg';

export const Header = () => {
  const x = 1;

  return <header className="header" data-testid="header">
    <section className="navigationSection">
      <div className="navigationContainer">
        <nav>
          <div className="logo">
            <img src={logo} alt="Todoist" className="headerLogo" />
          </div>
          <div >
            <ul className="navList">
              <li className="navItem">Home</li>
              <li className="navItem">Products</li>
              <li className="navItem">Support</li>
              <li className="navItem">Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </header>
}
