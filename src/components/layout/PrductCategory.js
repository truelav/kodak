import React from 'react';
import './productCategory.css';

export const ProductCategory = (props) => {

  const { product }  = props;
  console.log(product)

  return <div className="productCategoryContainer">
    <div className="productCategoryImageContainer">
      <img title="kodak" src={product.imageUrl} alt="kodak" className="productCategoryImage"></img>
    </div>
    <div className="productCategoryInfoContainer">
      <h2 className="productCategoryH2">{product.category}</h2>
    </div>
  </div>
}