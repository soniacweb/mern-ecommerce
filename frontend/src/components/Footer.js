import React from 'react'
import { Container, Row, Col, ListGroup, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <>
        <footer>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <h3 className="footer-title">Need help?</h3>
                        <ListGroup>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p">Help</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p">Track Order</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <Link className="delinfo footer-p" to="deliveryinfo">Delivery Info</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p">Returns Policy</p>
                            </ListGroup.Item>   
                        </ListGroup>
                    </Col>

                    <Col sm={12} md={6} lg={4} xl={3}>
                        <h3 className="footer-title">Useful Links</h3>
                        <ListGroup>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p">Find our stores</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p">Our Community</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p">Social causes we care about</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col sm={12} md={6} lg={4} xl={3} className="border-right desktop-social">
                        <h3 className="footer-title">Follow Us</h3>
                        <ListGroup>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p"><i className="social2 fab fa-facebook"></i> Facebook</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p"><i className="social2 fab fa-instagram"></i> Instagram</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p"> <i className="social2 fab fa-twitter"></i> Twitter</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p"><i class="social2 fab fa-youtube"></i> Youtube</p>
                            </ListGroup.Item> 
                            <ListGroup.Item className="footer-links">
                               <p className="footer-p"><i class="social2 fab fa-blogger-b"></i> Blog</p>
                            </ListGroup.Item>  
                        </ListGroup>
                    </Col>

                    <Col sm={12} md={6} lg={4} xl={3} className="mobile-social">
                        <h3 className="footer-title">Follow Us</h3>
                        <ListGroup className="social-container">
                            <ListGroup.Item className="footer-links">
                               <i className="social2 fab fa-facebook"></i> 
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                              <i className="social2 fab fa-instagram"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                               <i className="social2 fab fa-twitter"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-links">
                              <i class="social2 fab fa-youtube"></i>
                            </ListGroup.Item> 
                            <ListGroup.Item className="footer-links">
                              <i class="social2 fab fa-blogger-b"></i>
                            </ListGroup.Item>  
                        </ListGroup>
                    </Col>

                <Col sm={12} md={6} lg={4} xl={3}>
                <h3 className="footer-title2">Join the Gold Squad, sign up to our newsletter</h3>
                <InputGroup className="mb-4">
                    <FormControl
                    placeholder="Enter your email"
                    aria-label="Your emails address"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">Sign me up!</InputGroup.Text>
                </InputGroup>

                </Col>

                </Row>



                <hr></hr>
                <Row>
                    <Col className="text-center py-3">
                       Copyright &copy; Golden Shoes PLC 
                    </Col>
                </Row>

               
            </Container>
        </footer>
        </>
    )
}

export default Footer
