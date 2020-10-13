import React from 'react';
import { ProductCategory } from './PrductCategory';
import './productCategories.css';

export const ProductCategories = (props) => {
  const categories = props;
  return <section className="productsCategoriesSection">
    <div className="productsCategoriesContainer">
      {categories.products.map(product => (
        <ProductCategory  key={product.id} product={product}/>
        // <div className="productsCategoryContainer" key={product.id} product={product}>
        //   {product.productName}
        //   <img title="kodak" src={product.imageUrl} alt="kodak"></img>
        // </div>
      ))}
    </div>
  </section>
}