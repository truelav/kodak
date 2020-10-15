import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import items from '../../database/data.json';
import './products.css';

import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'
import { ProductGrid } from '../layout/Products'

export class Products extends Component {

  filterItems = (search) => {
    items.filter( (item) => {
      return item.includes(search)
    })
  }

  handleClick = () => {
    console.log('clicked')
  }

  currentSearch = '';

  render() {
    return (
      <section className="productsSections">
        <div className="productsContainer">
          <div className="productsInnerContainer">
            <h2>Filter:</h2>
            <div className="">
              <div>
                <p>Cameras</p>
              </div>
              <div>
                <p>Printer</p>
              </div>
              <div>
                <p>2 in 1</p>
              </div>
              <div>
                <p>Paper</p>
              </div>
            </div>
          </div>
          <div className="productsInnerContainer">
            <ProductGrid  items={items} />
          </div>
        </div>
      </section>
    )
  }
}
