import React from 'react';
import { Product } from './Product';
import './product.css';

export const ProductGrid = (props) => {
  const categories = props;
  return <section className="productsCategoriesSection">
    <div className="productsCategoriesContainer">
      {categories.items.map(product => (
        <Product  key={product.id} product={product}/>
      ))}
    </div>
  </section>
}