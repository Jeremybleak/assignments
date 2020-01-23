import React from 'react';

const About = () => {
    return (
        <div id='about' className='about-container'>
            <div className='about'>
                <div className='about-items'>
                    <div className='about-flex-one'>
                        <h1 className='about-title'>About</h1>
                        <h5>Recreated using React, designed by a UX Designer with Sketch. This is my very first responsive project. The assignment was to create a website for a ficticious company. Recreated using React, designed by a UX Designer with Sketch. This is my very first responsive project. The assignment was to create a website.</h5>
                        <div>
                            <a className='email' href="mailto: Jeremybleak99@gmail.com"><h4>JEREMYBLEAK99@GMAIL.COM</h4></a>
                            <div className='links'>
                                <a target='blank' href="https://github.com/Jeremybleak"><h4>GITHUB</h4></a>
                                <a target='blank' href="https://www.linkedin.com/in/jeremybleak/"><h4>LINKEDIN</h4></a>
                            </div>
                        </div>
                    </div>
                    <div className='profile-pic'></div>
                </div>
            </div>
        </div>
    );
};

export default About;