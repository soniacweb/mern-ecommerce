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
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register.js'
import Profile from './Pages/Profile.js'


const App = () => {
  return (
 
    <Router>

      <Header />
 
       <Route path='/login' component={LoginPage} />
       <Route path='/register' component={Register} />
       <Route path='/profile' component={Profile} />
       <Route path='/bestsellers/:id' component={BestSellersSingle} />
       <Route path='/product/:id' component={ProductSingle} />
       <Route path='/cart/:id?' component={Cart} />
       <Route path='/favourites/:id?' component={Favourites} />
       {/* <Route path='/admin/userlist' component={UserListScreen} />
       <Route path='/admin/user/:id/edit' component={UserEditScreen} /> */}
       <Route path='/search' component={Search} /> 
       <Route path='/deliveryinfo' component={Help} exact  />
       <Route path='/' component={Home} exact  />

     
    <Footer />

    </Router>


  );
}

export default App;
