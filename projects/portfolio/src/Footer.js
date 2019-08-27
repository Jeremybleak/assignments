import React from 'react';
import Linkedin from './Assets/Linkedin.png'
import Github from './Assets/GitHub-Mark.png'

const Footer = () => {
    return (
        <div className='footer'>
           <a href='https://www.linkedin.com/in/jeremybleak/'> <img src={Linkedin} alt=""/></a>
           <a href=''> <img src={Github} alt=""/></a>
        </div>
    );
};

export default Footer;