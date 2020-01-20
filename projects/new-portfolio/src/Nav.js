import React from 'react';

const Nav = () => {
    return (
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                <h2 className='name'>Jeremy Bleak</h2>
                <div className='nav-bar-navigation'>
                    <div>
                        <h4>Projects</h4>
                    </div>
                    <div>
                        <h4>Resume</h4>
                    </div>
                    <div>
                        <h4>About</h4>
                    </div>
                    <div>
                        <h4 className='contact-button'>Contact</h4>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Nav;