import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import { withContext } from '../ContextProvider'

const Nav = (props) =>{
        return(
        <div className='nav'>
            <Link className='nav-item' to='/home'><img className='home-peach' src="https://steemitimages.com/DQmUrknJEgHi2gG9wEUZHNrwychPUAef5pg9e4kaMdFZzPK/peach.png" alt=""/></Link>
            <h3 className='nav-name'>{props.user.username.toUpperCase()}</h3>
            <h5 className='nav-name-score'>SCORE:{props.score}</h5>
            <button className='nav-button' onClick={() => props.logout()}><h3>Logout</h3></button>
        </div>
    )
}


export default withContext(Nav)