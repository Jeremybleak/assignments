import React from 'react'
import Nav from './Nav'

const Hero = () =>{
    return (
        <div className='hero'>
            <Nav />
            <div className='hero-content'>
                <h1 className='title'>Eagle Imaging</h1>
                <h4 className='sub-title'>High quality aerial videography for your next project.</h4>
                <a href={'http://dadjoke.surge.sh/'} target='blank'><button className='quote-button'>GET A QUOTE</button></a>
            </div>
        </div>
    )
}

export default Hero