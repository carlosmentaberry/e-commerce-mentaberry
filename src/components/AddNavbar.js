import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logocart from '../cart.png';
import logo from '../React.png';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchItem from './SearchItem';

function AddNavbar({ items }) {
    const [item] = useState(items);

    return (
        <Navbar expand="lg" bg="light" variant="light" sticky="top" >
            <Navbar.Brand href="/" >
                <img src={logo} width="55px" height="55px" alt="logo" />
                Carlos Metaberry
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <ButtonGroup aria-label="Basic example">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/category/1">cat1</NavDropdown.Item>
                            <NavDropdown.Item href="/category/2">cat2</NavDropdown.Item>
                            <NavDropdown.Item href="/category/3">cat3</NavDropdown.Item>
                            <NavDropdown.Item href="/category/4">cat4</NavDropdown.Item>
                        </NavDropdown>
                    </ButtonGroup>
                    <SearchItem />
                </Nav>
                <Nav>
                    <Nav.Link href="/cart">
                        <Button variant="outline-dark" ><img src={logocart} width="35px" height="35px" alt="logo" /> {item}</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default AddNavbar;