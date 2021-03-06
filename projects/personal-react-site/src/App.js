import React from 'react'

// Third-Party
import {Switch, Route} from 'react-router-dom'

// my components
import Search from './Search'
import Profile from './Profile'
import Nav from './Nav'
import Header from './Header'

// Stylesheet
import './App.css'

const App = () =>{
    return(
        <div>
            <Nav/>
            {/* <Header/> */}
            <Switch>
               <Route exact path='/' component={Header} />
               <Route path='/search' component={Search} />
               <Route path='/profile' component={Profile} />
            </Switch>
        </div>
    )
}

export default App