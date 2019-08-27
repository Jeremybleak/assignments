import React from 'react';
// import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import './App.css'
import More from './More';
import Footer from './Footer';
// import Nav from './Nav';
const App = () => {
    return (
        <div>
            <Home/>
            <More/>
            <About/>
            <Footer/>
        </div>
    );
};

export default App;