import React from 'react';

const Nav = () => {
    return (
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                <a href='/'><h2 className='nav-bar-logo'>Jeremy Bleak</h2></a>
                <div className='nav-bar-navigation'>
                    <div>
                        <a href='#projects'><button className='nav-bar-item'>Projects</button></a>
                    </div>
                    <div>
                        <a href='/#resume'><button className='nav-bar-item'>Resume</button></a>
                    </div>
                    <div>
                        <a href='/#about'><button className='nav-bar-item'>About</button></a>
                    </div>
                    <div>
                        <a href='/#contact'><button className='contact-button'>CONTACT</button></a>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Nav;