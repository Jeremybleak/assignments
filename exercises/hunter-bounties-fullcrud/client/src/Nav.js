import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/'> Board </Link>
            <Link to='/add'> Add </Link>
        </div>
    )
}

export default Nav