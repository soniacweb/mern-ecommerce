import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Promo = (imgSrc1, imgSrc2, alt1, alt2) => {
    return (
        <Container>

           <h1 className="my-5">Shop Back To School</h1>

        <Col >
        <Row  md={2} className="my-5">
            <Image src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1718&q=80" alt="back to school image 1">
            </Image>
    
            <Image src="https://clarks.scene7.com/is/image/Pangaea2Build/BTS-Hub-img-004-2-ss20?fmt=jpeg&wid=720" alt="back to school image 2" fluid>
            </Image>
        </Row>
        </Col>
        </Container>
    )
}

export default Promo
