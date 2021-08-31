import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, ListGroup, Card, Button, Breadcrumb, Dropdown, ListGroupItem, Form, Tabs, Tab, Table } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'

import Message from '../components/Message.js'
import Loader from '../components/Loader.js'


const BestSellersSingle = ({ history, match }) => {
    const [ fave, setFave ] = useState(false) 
    const [ qty, setQty ] = useState(1) 
    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)

    const { loading, error, product } = productDetails


    useEffect(()=> {
       dispatch(listProductDetails(match.params.id))

    
    }, [dispatch, match])
   

    const addToCart = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    // need set timeout to show class change
    const handleToggle = (e) => {
        setFave(!fave);
        if (e.target.className === 'social far fa-heart') {
        history.push(`/favourites/${match.params.id}?qty=${qty}`)
        }
    }

   
    return (

        <main>
        
        <Container>
                    <Breadcrumb className="my-5">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/api/products">
                             {product.department}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/api/products">
                             {product.category}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
                        </Breadcrumb>
                <Link className="btn btn-dark my-3" to='/'>
                    Go Back
                </Link>

            {
                loading ? <Loader /> : error ? <Message>{error}</Message> : 

           <Row>
               <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
               </Col>

               <Col md={3} >
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2> {product.name} </h2>
                        </ListGroup.Item>

                        <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} REVIEWS`} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                                PRICE: £{product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                                DESCRIPTION: {product.description}
                        </ListGroup.Item>

                            <ListGroup.Item>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                Select Shoe Size
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-1" active>
                                        UK 3 - {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        UK 4 - {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        UK 5 - {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        UK 6 - {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        UK 7 - {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        UK 8 - {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        UK 9 - {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-4">More info on sizes?</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </ListGroup.Item>

                        <ListGroup.Item className="socials">
                                <i onClick={handleToggle} className={fave ? "social fas fa-heart" : "social far fa-heart"}></i>
                                <i className="social fab fa-twitter"></i>
                                <i className="social fab fa-facebook"></i>
                                <i className="social fab fa-instagram"></i>
                        </ListGroup.Item>

                    </ListGroup>
               </Col>   

               <Col md={3}>
                   <Card>
                       <ListGroup variant="flush">
                       <ListGroup.Item>
                           <Row>
                             <Col>
                                 PRICE: 
                               </Col>
                               <Col>
                               <strong>£{product.price} </strong> 
                            </Col>
                           </Row>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <Row>
                             <Col>
                                 STATUS: 
                               </Col>
                               <Col>
                               <strong>{product.countInStock > 0 ? 'IN STOCK': 'OUT OF STOCK'}</strong>
                             </Col>
                           </Row>
                       </ListGroup.Item>

                        { product.countInStock > 0 && (
                            <ListGroupItem>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                    <Form.Control as="select" value={qty} onChange={e => setQty(e.target.value)}>
                                        {
                                            [...Array(product.countInStock).keys()].map(x => (
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            )
                                        )}
                                    </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                          )}
                       <ListGroup.Item className="btns">
                    
                            <Button 
                            onClick={addToCart}
                            className="btn-block" 
                            type="btn" 
                            disabled={product.countInStock === 0}
                            >
                                ADD TO CART
                            </Button>                       
                    
                            <Button className="btn-block" type="btn" disabled={product.countInStock === 0}>COLLECT</Button>
                        {/* </Col>
                            </Row> */}

                       </ListGroup.Item>

                       </ListGroup>
                   </Card>
               </Col>     

               <Col>
               <Card>
                   <ListGroupItem className="my-3">
                       <ListGroup>
                       <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Product Information">

                                {product.description}
                                
                                <ul className="my-3 productInfo">
                                    <li><span>UPPER: </span>Leather</li>
                                    <li><span>LINING: </span>Fabric</li>
                                    <li><span>OUTSOLE: </span>Rubber</li>
                                    <li><span>Colour: </span>Black</li>
                                    <li><span>Product </span>Code: 1439067020</li>

                                </ul>

                            </Tab>
                            <Tab eventKey="profile" title="Delivery & Returns">
                            
                            <Card style={{ width: '40rem' }}>
                                <Col>
                                <Row>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="deliveryTitle">UK Standard - £3</ListGroup.Item>
                                        <ListGroup.Item>Delivery between:</ListGroup.Item>
                                        <ListGroup.Item>Monday, 23 August 2021 - Thursday, 26 August 2021</ListGroup.Item>
                                    </ListGroup>
                                </Row>       
                                </Col>
                                </Card>

                                <Card style={{ width: '40rem' }}>
                                <Col>
                                <Row>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="deliveryTitle">Next Day - £4.99</ListGroup.Item>
                                        <ListGroup.Item>Delivery within 24 hours or order confirmation</ListGroup.Item>
                                        <ListGroup.Item>Get your shoes the next working day!</ListGroup.Item>
                                    </ListGroup>
                                </Row>       
                                </Col>
                                </Card>

                                <Card style={{ width: '40rem' }}>
                                <Col>
                                <Row>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="deliveryTitle">Choose Your Day - £6</ListGroup.Item>
                                        <ListGroup.Item>Choose a day to suit you - 7 days a week</ListGroup.Item>
                                    </ListGroup>
                                </Row>       
                                </Col>
                                </Card>

                            </Tab>
                            <Tab eventKey="contact" title="Reviews">
                            <h3> Reviews </h3>

                            </Tab>
                            </Tabs> 
                       </ListGroup>
                   </ListGroupItem>
               </Card>
               </Col> 
            </Row>

      }
        </Container>
        </main>
    )
}

export default BestSellersSingle
