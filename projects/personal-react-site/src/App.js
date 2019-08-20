import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import Profile from './Profile'
import Nav from './Nav'
import Header from './Header'
import './App.css'
// import PokemonProvider from './PokemonProvider';

const App = () =>{
    return(
        <div>
            <Nav/>
            <Header/>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/search' component={Search} />
               <Route path='/profile' component={Profile} />
            </Switch>
        </div>
    )
}

export default App