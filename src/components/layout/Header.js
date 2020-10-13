import React from 'react';
import { NavLink } from 'react-router-dom';

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
              <li className="navItem">
                <NavLink to="/">
                  Home
                </NavLink>
                </li>
              <li className="navItem">
                <NavLink to="Products"> 
                  Products
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="Support">
                  Support
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </header>
}
