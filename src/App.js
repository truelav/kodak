import React from 'react';
import products from './database/data.json'
import './app.css';
import { Header } from './components/layout/Header'
import { ProductCategories } from './components/layout/ProductCategories'
// import './assets/css/app.css';
// import './App.css';

export const App = () => (
    <div className="App">
      <Header/>
      <ProductCategories products={products}/>
      <div className="">
      </div>
    </div>
  );

// export default App;
