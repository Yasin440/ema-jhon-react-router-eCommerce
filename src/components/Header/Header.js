import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="logoImg">
                <img src={logo} alt="Site Logo" />
            </div>
            <div className="nav">
                <div className="navbar">
                    <ul>
                        <li className="list-item">
                            <NavLink to="/shop" activeClassName="selected">shop</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink to="/order-review" activeClassName="selected">Order Review</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink to="/manage-inventory-here" activeClassName="selected">Manage Inventory here</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
        </div>
    );
};

export default Header;