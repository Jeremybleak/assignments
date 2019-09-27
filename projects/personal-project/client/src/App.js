import React from 'react'
import Home from './Home'
import './styles.css'
import Asteroids from './Asteroids'
import ArcadeGames from './ArcadeGames'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './Auth/ProtectedRoute'

const App = () =>{
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/signup' component={Signup} />
                <ProtectedRoute path='/asteroids' component={Asteroids}/>
                <ProtectedRoute path='/home' component={ArcadeGames} />
                <Route path='/login' component={Login} />
            </Switch>
        </div>
    )
}

export default App