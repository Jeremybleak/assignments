import React from 'react';

const About = () => {
    return (
        <div className='about'>
                <h1 className='title'>About.</h1>
                <div className='about-container'>
                    <div className='bio'>
                    <span><h1><a href='mailto: jeremybleak99@gmail.com'>Jeremybleak99@gmail.com</a></h1></span>
                        <span><h2>Github:</h2></span> <span><h2><a target='blank' href="https://github.com/Jeremybleak">https://github.com/Jeremybleak</a></h2></span>
                        <span><h2>Linkedin:</h2></span> <span><h2><a target='blank' href="https://www.linkedin.com/in/jeremybleak/">https://www.linkedin.com/in/jeremybleak/</a></h2></span>
                    </div>
                    <div className='profile-picture'>
                    </div>
                </div>
        </div>
    );
};

export default About;