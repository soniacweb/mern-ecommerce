import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
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
            <h1>Latest products</h1>
            <Row>
        
                {products.map((product) =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    {/* <h3>{product.name}</h3> */}
                    {/* <img src={product.image} /> */}
                    <Product product={product} />
                    </Col>
                    
                ))}
            </Row>
        </>
    )
}

export default Home
