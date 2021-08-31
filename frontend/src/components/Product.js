import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {

    const [ fave, setFave ] = useState(false) 

    const handleToggle =() => {
        setFave(!fave);
    }

    return (
        <div>
            <Card className="m-3">
              <Link to={`/bestsellers/${product._id}`}>
                 <Card.Img src={product.image} />
                 </Link>

                 <Card.Body>
                    <Link to={`/bestsellers/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <Rating value={product.rating} text={`from ${product.numReviews} customers`}/>
                        {/* <div className="my-3">
                            {product.rating} 
                        </div> */}
                    </Card.Text>
                    <Card.Text className="pricebox" as="h3">
                        £{product.price} 
                        <div><i onClick={handleToggle} className={fave ? "social fas fa-heart" : "social far fa-heart"}></i></div>
                    </Card.Text>

                     </Card.Body>  
            </Card>
            
        </div>
    )
}

export default Product
