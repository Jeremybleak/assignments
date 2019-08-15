import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import About from './About'
import './App.css'

const App = () =>{
    return(
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/About' component={About} />
            </Switch>
        </div>
    )
}
export default App