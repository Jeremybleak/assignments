import React from 'react'
import Menu from './Menu'
const Home = () => {
    return (
        <div className='hero'>
            <Menu/>
            <div className='hero-title'>
                <h1 className='hello'>hello. My name is <b className='jeremy'>Jeremy</b></h1>
                <h4>I'm a web Developer<span className='dev'>, and I like <a target='blank' href='https://www.youtube.com/watch?v=CMNry4PE93Y' className='turtles'>turtles</a></span></h4>
            </div>
        </div>
    )
}

export default Home;