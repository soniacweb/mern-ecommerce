import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToFaves, removeFromFaves } from '../actions/favesActions'

const Favourites = ({ match, location, history}) => {
    const productId = match.params.id
    const dispatch = useDispatch()
    const faves = useSelector((state) => state.faves) // using useselector hook to get items from the state
    const { faveItems } = faves

    useEffect(() => {
        if (productId) {
          dispatch(addToFaves(productId))
        }
      }, [dispatch, productId])

      const removeFromCartHandler = (id) => {
        dispatch(removeFromFaves(id))
      }

      const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
      }
    
    return (
        <Container className="basket"> 
         <h1 className="my-5">Faves List</h1>
         <Link className="btn btn-dark my-3" to='/'>Continue Shopping</Link>

        <Row className="my-4">
        <Col md={8}>
          {faveItems.length === 0 ? (
            <Message>
              Your faves list is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {faveItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>£{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToFaves(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas far-heart'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        {/* <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  items
                </h2>
                £
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col> */}
      </Row>
    </Container>
    )
}

export default Favourites





