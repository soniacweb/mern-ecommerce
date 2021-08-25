import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Help = () => {
    return (
        <Container>
            <Row>
                <h1 className="text-center py-5">Here to help</h1>
                <hr></hr>

                <Col className="py-5">
                <h3>Delivery - 7 Days a Week</h3>
                <p>
                We use a secure courier service to make sure your shoes reach you safe and sound. A signature is always required on delivery, so you can order with confidence. We've got a great selection of delivery options below to make sure we get your new shoes to you when its convenient for you.

                We’re a fully audited and accredited carbon neutral organisation and fully offset all of the associated emissions with the delivery of your parcel.
                </p>
              

          
                <h3>Next Day Delivery</h3>
                <p>
                Full Price Products = £4.99     Sale Products = £4.99

                Order by Midnight Monday to Friday; 10:30pm Saturday and Midnight Sunday for Next Day Delivery (excluding Bank Holidays). Delivery option is subject to location and stock availability. 
                </p>
              
                <h3>Choose Your Day (Incl. Weekends)</h3>
                <p>
                Full Price Products = £4.99    Sale Products = £4.99

                Choose your delivery day up to 14 days in advance! (excluding bank holidays) Delivery option is subject to location and stock availability.
               </p>
             
                <h3>Click & Collect</h3>
                <p>
                Full Price Products = FREE  Sale Products = FREE

                Order online and collect from any of our UK stores in as little as 20 minutes.
                 </p>
               
                </Col>
            </Row>
        </Container>
    )
}

export default Help
