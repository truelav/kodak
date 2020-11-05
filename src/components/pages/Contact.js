import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import items from '../../database/data.json';
import './products.css';

import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'
import { ProductGrid } from '../layout/Products'

export class Contact extends Component {

  render() {
    return (
      <section className="productsSections">
        <div className="productsContainer">
          <p>This is Contact Page</p>
        </div>
      </section>
    )
  }
}