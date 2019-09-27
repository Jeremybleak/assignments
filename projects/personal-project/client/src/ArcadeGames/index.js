import React from 'react';
import './arcadeGames.css'
import Nav from '../Nav'
import {Link} from 'react-router-dom'
const ArcadeGames = () => {
    return (
        <div>
            <Nav/>
            <div className='arcade-game-master'>
                <div className='arcade-game-container'>
                    <div>
                       <Link to='/asteroids' ><div className='asteroids-display-image'></div></Link>
                        <h3 className='game-name'><Link to='/asteroids'>Asteroids</Link></h3>
                    </div>
                    <div>
                        <div className='coming-soon-image'></div>
                        <h3 className='game-name'>More soon!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArcadeGames