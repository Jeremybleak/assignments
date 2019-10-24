import React from 'react'
import './app.css'
import Hero from './Hero'
import {Route, Switch} from 'react-router-dom'

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Hero}/>
            </Switch>
        </div>
    )
}

export default App