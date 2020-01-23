import React from 'react';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero'>
                <div className='hero-content'>
                    <h1>Hello. My name is Jeremy.</h1>
                    <h5>I'm a web developer, and I like turtles.</h5>
                    <a href='/#projects'><h4 className='hero-button'>VIEW MY WORK</h4></a>
                </div>
            </div>
        </div>    
    );
};

export default Hero;