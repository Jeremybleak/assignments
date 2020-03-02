import React from 'react';

const About = () => {
    return (
        <div id='about' className='about-container'>
            <div className='about'>
                <div className='about-items'>
                    <div className='about-flex-one'>
                        <h1 className='about-title'>About</h1>
                        <h5>A tall, goofy, curly haired guy, who has had a passion for building since his Minecraft days. I find excitement about creating/learning new things, and am constantly looking for new challenges and puzzles to solve. I love meeting new people! <a className='say-hi' href='#contact'>Say hi!</a></h5>
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