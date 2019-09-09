import React from 'react'
import BountyContainer from './BountyContainer'
import Nav from './Nav'
import {Route, Switch} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route exact path='/' component={BountyContainer}/>
            </Switch>
        </div>
    )
}

export default App