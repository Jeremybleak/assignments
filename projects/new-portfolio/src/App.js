import React from 'react';
//Components
import Hero from './Hero';
import Nav from './Nav';
//Style
import './App.css'
import Projects from './Projects';

const App = () => {
    return (
        <div>
            <Nav/>
            <Hero/>
            <Projects/>
        </div>
    );
};

export default App;