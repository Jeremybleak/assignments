import React from 'react'
import './Home.css'
import Login from '../Auth/Login'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-title'>
            <div className='arcade-title-box'>
                <div className='home'>
                    <h1 className='peach-logo'>Games and the Giant Peach</h1>
                    <Link to='/login'>Login</Link>
                    <Link to='signup'>Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Home