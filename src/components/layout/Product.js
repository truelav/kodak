import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

import './product.css';

export const Product = (props) => {

  const { product }  = props;

  return <div className="productCategoryContainer">
    <div className="productCategoryHeaderContainer">
      <h2 className="productCategoryH2">{product.productName}</h2>
    </div>
    <p>{product.id}</p>
    <div className="productCategoryImageContainer">
      <img title="kodak" src={product.imageUrl} alt="kodak" className="productCategoryImage"></img>
    </div>
    <div className="productCategoryInfoContainer">
      <p>
        {product.photoSize}
      </p>
      <p>
        {product.price}
      </p>
      <a href={product.productsURL}>
        <button className="LearnMoreButton">
          Learn More
        </button>
      </a>
    </div>
  </div>
}