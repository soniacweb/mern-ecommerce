import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './Pages/Home'
import ProductSingle from './Pages/ProductSingle'

const App = () => {
  return (

    <Router>

      <Header />
     <main className="py-5">
       {/* slider  */}
       <Route path='/product/:id' component={ProductSingle} />

     </main>

     <Container>
       <Route path='/' component={Home} exact  />
        </Container>

    <Footer />

    </Router>


  );
}

export default App;
