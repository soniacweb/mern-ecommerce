import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'


const Profile = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
 
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
        history.push('/login')
        } else {
            if (!user || !user.name) {
                // dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile')) 
            } else {
                setName(user.name)
                setEmail(user.email)

            }
        }
    }, [dispatch, user, history, userInfo])

const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Unfortunately the passwords you\'ve entered don\'t match')
    } else {
        //dispatch update profile
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return <Container> 
  <Row>
      <Col md={3}>
      <h1 className="my-5" >Dashboard</h1>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {success && <Message>Profile updated!</Message>}

      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

                <Button type='submit' variant='primary' className="my-3">
                Update
                </Button>
            </Form>
        </Col>
        <Col md={9}>
            <h1 className="my-5">My Orders</h1>
        </Col>
        </Row>
  </Container>
}

export default Profile
