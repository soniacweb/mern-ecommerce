import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Product from '../components/Product'

import axios from 'axios'

const Search = () => {
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products')
            setSearchResults(data)
        }
        fetchData()
    }, [])

    return (
        <Container>
                 <h1>Best Sellers</h1>

                 <Row>
                {searchResults.filter(value => {
                      if (searchResults === "") {
                        return value
                    } else if (value.name.toLowerCase().includes(searchResults.toLowerCase())) {
                        return value
                    }
                    
                })
                
                .map((result) =>(
                    <Col key={result._id} sm={12} md={6} lg={4} xl={3}>
                    
                    <Product product={result} />
                    </Col>
                    
                ))}
            </Row>

            </Container>
    )
}

export default Search
