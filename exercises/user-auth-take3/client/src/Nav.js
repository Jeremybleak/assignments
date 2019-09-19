import React from 'react';
import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <Link to='/signup'>Sign in</Link>
            <Link to='/login'>Login</Link>
            <Link to='/todos'>Todos</Link>
            <button>Logout</button>
        </div>
    );
};

export default Nav;