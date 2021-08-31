import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Help from './components/Help.js'

import Search from './Pages/Search'
import Home from './Pages/Home'
import BestSellersSingle from './Pages/BestSellersSingle'
import ProductSingle from './Pages/ProductSingle'
import Cart from './Pages/Cart'
import Favourites from './Pages/Favourites'


const App = () => {
  return (
 
    <Router>

      <Header />
 
       <Route path='/bestsellers/:id' component={BestSellersSingle} />
       <Route path='/product/:id' component={ProductSingle} />
       <Route path='/cart/:id?' component={Cart} />
       <Route path='/favourites/:id?' component={Favourites} />

       <Route path='/search' component={Search} />

       <Route path='/' component={Home} exact  />
       <Route path='/deliveryinfo' component={Help} exact  />

     
    <Footer />

    </Router>


  );
}

export default App;
