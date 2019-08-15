import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () =>{
    return(
        <div className='nav'>
            <Link className='Link' to='/'>Home</Link>
            <Link className='Link' to='/About'>About</Link>       
            </div>
    )
}

export default Nav