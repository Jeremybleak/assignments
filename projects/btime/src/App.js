import React from 'react'
import './app.css'
import Hero from './Hero'
import {Route, Switch} from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Hero}/>
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
            </Switch>
        </div>
    )
}

export default App