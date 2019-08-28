import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav' id='nav'>
            <Link className='Link' to='/'>Projects</Link>
            <Link className='Link'>Resume</Link>
            <Link className='Link' to='/about'>About</Link>
        </div>
    );
};

export default Nav;