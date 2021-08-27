import React, { useState, useEffect } from 'react'
import { Container, Row, Col, FormControl } from 'react-bootstrap'

import Product from '../components/Product'

import axios from 'axios'

const Search = () => {
    const [searchResults, setSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=> {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products')
            setSearchResults(data)
        }
        fetchData()
    }, [])

    return (
        <Container>
                 <h1 className="my-3">Search Results</h1>
                 <FormControl
                    action="/searchresults"
                    method="GET"
                    
                    type="search"
                    placeholder="SEARCH"
                    className="mr-2 my-5"
                    aria-label="Search"
                    onChange={event => setSearchTerm(event.target.value)}
                />
                 <Row>
                {searchResults.filter(value => {
                      if (searchResults === "") {
                        return 'value'
                    } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
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
