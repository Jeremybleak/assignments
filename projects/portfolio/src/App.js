import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import './App.css'
import More from './More';
import Footer from './Footer';
import Nav from './Nav';
import Project from './Project'
const App = () => {
    return (
        <div>
            <Home/>
            <More/>
            <Nav/>
            <Switch>
                <Route exact path='/' component={Project} />
                <Route path='/about' component={About} />
            </Switch>
            <Footer/>
        </div>
    );
};

export default App;