import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Header from './Header'
import './App.css'
import Footer from './Footer'


const App = () =>{
    return(
        <div>
            <Header/>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/services' component={Service}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App

