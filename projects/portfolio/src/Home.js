import React from 'react';
import Smoke from './Assets/smoke.mp4'
import Nav from './Nav';
const Home = () => {
    return (
        <div className='hero'>
            <Nav/>
            <video src={Smoke} autoPlay muted ></video>
              <h1 className='hero-h1'>
                  <span>J</span>
                  <span>E</span>
                  <span>R</span>
                  <span>E</span>
                  <span>M</span>
                  <span>Y</span>
                  <span className='title-space'></span>
                  <span>B</span>
                  <span>L</span>
                  <span>E</span>
                  <span>A</span>
                  <span>K</span>
              <p className='dev'>Developer</p>
              </h1>
        </div>
    );
};

export default Home;