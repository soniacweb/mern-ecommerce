import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Slider from '../components/Slider.js'
import Promo from '../components/Promo.js'
import Promo2 from '../components/Promo2.js'


import axios from 'axios'


// lpop through all the products and output each one
const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        console.log('hello')
        const fetchData = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchData()
    }, [])

    return (
        <>
               <Slider />
                <Promo 
                // imgSrc1={"https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1718&q=80"} 
                // alt1={"back to school image 1"}
                // imgSrc2={"https://clarks.scene7.com/is/image/Pangaea2Build/BTS-Hub-img-004-2-ss20?fmt=jpeg&wid=720"}
                // alt2={"back to school image 2"}
                />
            <Container>
                 <h1>Best Sellers</h1>

                 <Row>
                {products.map((product) =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    {/* <h3>{product.name}</h3> */}
                    {/* <img src={product.image} /> */}
                    <Product product={product} />
                    </Col>
                    
                ))}
            </Row>

            </Container>
            

            <Promo2 />

        </>
    )
}

export default Home
