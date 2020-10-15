import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

import { Home } from './components/pages/Home'
import { Products } from './components/pages/Products'

import products from './database/data.json'
import './app.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Header />
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/" component={Products} />
            {/* <Route path="/" component={About} />
            <Route path="/" component={Contact} /> */}
            <Route component={Error} />
          </Switch>
        </div>
          <Footer />
      </BrowserRouter>
    )
  }
}


// export const App = () => (
//     <div className="App">
//       <Header/>
//       <ProductCategories products={products}/>
//       <div className="">
//       </div>
//       <Footer />
//     </div>
//   );

// export default App;
