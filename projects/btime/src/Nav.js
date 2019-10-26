import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
    return(
        <div className='nav'>
            <Link to='/'><h2>Home</h2></Link>
            <Link  className='service'>
            <h2>Services</h2>
            <div className='dropDown'>
                <div className='color'></div>
                <Link className='middleDropDown'><h4>Service #1</h4></Link>
                <Link className='middleDropDown'><h4>Service #2</h4></Link>
                <Link className='middleDropDown'><h4>Service #3</h4></Link>
            </div>
            </Link>
            <img className='logo' src="https://www.sccpre.cat/mypng/detail/2-24802_flying-eagle-silhouette-heron-silhouette-silhouette-flying-eagle.png" alt=""/>
            <Link to='portfolio'><h2>Portfolio</h2></Link>
            <Link to='about'><h2>About</h2></Link>
        </div>
    )
}

export default Nav