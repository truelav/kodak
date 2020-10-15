import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'

import './home.css';
import lifestyleImg from '../../assets/images/lifestyle/home1.webp';
import paperIcon from '../../assets/images/icons/paper.svg';
import camerIcon from '../../assets/images/icons/camera.svg';
import printerIcon from '../../assets/images/icons/printer.svg';

export class Home extends Component {
  render() {
    return (
      <section className="homeSection">
        <div className="homeContainer"> 
          <div className="homeImageContainer">
            <img src={lifestyleImg} className="homeLifestyleImage" alt="Kodak Camera"></img>
          </div>
          <div className="homeCategoriesContainer">
            <div className="homeCategoryContainer">
              <div className="homeCategoryIconContainer">
                <img src={paperIcon} className="homeCategoryIcon" alt=""></img>
              </div>
              <h3>Photo Paper for Instant Print Cameras</h3>
              <p>2.1" by 3.4"</p>
              <a href="/products">
                <button className="LearnMoreButton">
                  Learn More
                </button>
              </a>
            </div>
            <div className="homeCategoryContainer">
              <div className="homeCategoryIconContainer">
                <img src={paperIcon} className="homeCategoryIcon" alt=""></img>
              </div>
              <h3>Photo Paper for Dock Printers</h3>
              <p>4" by 6"</p>
              <a href="/products">
                <button className="LearnMoreButton">
                  Learn More
                </button>
              </a>
            </div>
            <div className="homeCategoryContainer">
              <div className="homeCategoryIconContainer">
                <img src={printerIcon} className="homeCategoryIcon" alt=""></img>
              </div>
              <h3>Wireless Printer</h3>
              <p>2.1" by 3.4"</p>
              <a href="/products">
                <button className="LearnMoreButton">
                  Learn More
                </button>
              </a>
            </div>  
            <div className="homeCategoryContainer">
              <div className="homeCategoryIconContainer">
                <img src={camerIcon} className="homeCategoryIcon" alt=""></img>
              </div>
              <h3>Instant Print Cameras</h3>
              <p>2.1" by 3.4"</p>
              <a href="/products">
                <button className="LearnMoreButton">
                  Learn More
                </button>
              </a>
            </div>  
            <div className="homeCategoryContainer">
              <div className="homeCategoryIconContainer">
                <img src={printerIcon} className="homeCategoryIcon" alt=""></img>
              </div>
              <h3>Wireless Printer</h3>
              <p>3" by 3" Square</p>
              <a href="/products">
                <button className="LearnMoreButton">
                  Learn More
                </button>
              </a>
            </div>  
            <div className="homeCategoryContainer">
              <div className="homeCategoryIconContainer">
                <img src={camerIcon} className="homeCategoryIcon" alt=""></img>
              </div>
              <h3>Instant Print Cameras</h3>
              <p>3" by 3" Square</p>
              <a href="/products">
                <button className="LearnMoreButton">
                  Learn More
                </button>
              </a>
            </div> 
          </div>
        </div>
      </section>
    )
  }
}
