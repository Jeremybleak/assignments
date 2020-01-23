import React from 'react';
//Components
import Hero from './Hero';
import Nav from './Nav';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
//Style
import './App.css'

const App = () => {
    return (
        <div>
            <Nav/>
            <Hero/>
            <Projects/>
            <Resume/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;