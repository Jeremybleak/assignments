import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <div className='Header'>
                <Link className='happy' to='/'>Home</Link>
                <Link className='happy1' to='/about'>About</Link>
                <Link className='happy2' to='/services'>Services</Link>
            </div>
        </div>
    )
}

export default Header