git import React from 'react';
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
                            <a href="/shop">shop</a>
                        </li>
                        <li className="list-item">
                            <a href="/order-review">Order Review</a>
                        </li>
                        <li className="list-item">
                            <a href="/manage-inventory-here">Manage Inventory here</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;