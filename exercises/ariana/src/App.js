import React from 'react';
// import Nav from './Nav'
import Home from './Home'
import About from './About'
import './App.css'
import Footer from './Footer'
import {Route, Switch} from 'react-router-dom'
import Nav from './Nav';
import Contact from './Contact'

const App = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;