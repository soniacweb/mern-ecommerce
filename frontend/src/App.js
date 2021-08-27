import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Help from './components/Help.js'

import Search from './Pages/Search'
import Home from './Pages/Home'
import ProductSingle from './Pages/BestSellersSingle'
import BestSellersSingle from './Pages/ProductSingle'


const App = () => {
  return (

    <Router>

      <Header />
 
       <Route path='/product/:id' component={ProductSingle} />
       <Route path='/bestsellers/:id' component={BestSellersSingle} />

       <Route path='/search' component={Search} />

       <Route path='/' component={Home} exact  />
       <Route path='/deliveryinfo' component={Help} exact  />

    <Footer />

    </Router>


  );
}

export default App;
