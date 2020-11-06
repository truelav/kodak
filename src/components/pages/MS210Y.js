import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import items from '../../database/data.json';
import './productPage.css';

export class MS210 extends Component {

  render() {

    const item = items[0]

    return (
      <section className="productBodySection">
        <div className="productBodyContainer">

          <div className="productTopContainer">
            <div className="productTopInnerContainer">
              <img className="productMainImage" src={item.imageUrl} alt={item.altMainImage}></img>
            </div>
            <div className="productTopInnerContainer">
              <div className="productTopHeaderContainer">
                <h2>KODAK</h2>
                <h2>{item.productName}</h2>
              </div>
              <div className="productFeaturesContainer">
                <ul>
                  {item.features.map((product,i) =>(
                    <li key={i}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}