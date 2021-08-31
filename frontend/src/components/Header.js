
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'


// import { Switch, Redirect } from 'react-router-dom'

import {Navbar, Container, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'

// import Search from '../Pages/Search'

const Header = ({history}) => {
    const redirect = () => {
        history.push('/search')
      }
  
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand>Golden Shoes</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <NavDropdown title="Women's" id="basic-nav-dropdown">
                    <LinkContainer to="/chelseaboots">
                         <NavDropdown.Item >Chelsea Boots</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item href="#action/3.2">Sandals</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Trainers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">High Heels</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Men's" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Chelsea Boots</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Sandals</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Trainers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Formal Shoes</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Kid's" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Chelsea Boots</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Sandals</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Trainers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Formal Shoes</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Brands" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Converse</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Nike</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Dr Martens</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Schuh</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">UGG</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                {/* <Switch> */}
                <Form className="d-flex">

                <FormControl
                    action="/search"
                    method="GET"
                    type="search"
                    placeholder="SEARCH"
                    className="mr-2"
                    aria-label="Search"
                    onChange={() => redirect}
                />
                    
                </Form> 
                {/* </Switch> */}
                <Nav className="ml-auto">
                    <LinkContainer to="/favourites">
                        <Nav.Link className="nav-options"> <i className="far fa-heart"></i> Favourites</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/cart">
                        <Nav.Link className="nav-options"> <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/login">
                        <Nav.Link className="nav-options"> <i className="far fa-user"></i> Sign In</Nav.Link>
                    </LinkContainer>                

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
