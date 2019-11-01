import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <div className='logo-container'>
                <img src="https://cdn.shopify.com/s/files/1/0018/1587/1546/products/custom-design-corrugated-mailer-boxes_1024x1024.png?v=1543205964" alt=""/>
                <h4>DDDB</h4>
            </div>
            <div className='nav-links'>
                <Link>About</Link>
                <Link>Shop</Link>
                <Link>Cart</Link>
            </div>
        </div>
    );
};

export default Nav;