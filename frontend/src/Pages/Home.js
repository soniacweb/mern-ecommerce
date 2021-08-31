import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Slider from '../components/Slider.js'
import Promo from '../components/Promo.js'
import Promo2 from '../components/Promo2.js'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'


// loop through all the products and output each one
const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products} = productList

    useEffect(()=> {
        dispatch(listProducts())
         
    }, [dispatch])

    return (
        <>
               <Slider />
                <Promo />
            <Container>
                 <h1>Best Sellers</h1>
                 { loading ? <Loader /> : error ? <Message children={'Woops, something went wrong!'}/> : 
                 <Row>
                    { products.map((product) =>(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        
                        <Product product={product} />
                        </Col>
                        
                    ))}
                </Row>
                }

            </Container>
            

            <Promo2 />

        </>
    )
}

export default Home
