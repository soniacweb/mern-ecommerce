import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'


const Promo2 = (imgSrc1, imgSrc2, alt1, alt2) => {
    return (
        <>
        <Container>

           <h1 className="my-5">New Arrivals</h1>

        <Col >

        <Row md={2} className="my-5">
        
            {/* <Card> */}
                <Image className="cardImg" src="https://images.unsplash.com/photo-1593010932917-92bd21088dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80" alt="back to school image 1">
                </Image>
                {/* <Card.Body>
                <Button variant="primary">SHOP</Button>
                </Card.Body>
            </Card> */}


            {/* <Card> */}
                <Image className="cardImg" src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" alt="back to school image 2">
                </Image>
                {/* <Card.Body>
                <Button variant="primary">SHOP</Button>
                </Card.Body>
            </Card>
            */}
        
        </Row>
       
       
        </Col>
        </Container>

</>
    )
}

export default Promo2
