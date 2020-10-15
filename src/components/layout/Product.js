import React from 'react';
import './product.css';

export const Product = (props) => {

  const { product }  = props;

  return <div className="productCategoryContainer">
    <div className="productCategoryHeaderContainer">
      <h2 className="productCategoryH2">{product.productName}</h2>
    </div>
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
      <a href="/products">
        <button className="LearnMoreButton">
          Learn More
        </button>
      </a>
    </div>
  </div>
}