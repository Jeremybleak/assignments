import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () =>{
    return(
        <div className='nav'>
            <Link className='Link' to='/search'>Search</Link>
            <Link className='Link' to='/'>Poké<img className='pokeLogo' src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG' alt='' />Cards</Link>
            <Link className='Link' to='/profile'>Profile</Link>
        </div>
    )
}

export default Nav