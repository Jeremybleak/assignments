import React from 'react'
import Nav from './Nav'
import {Route, Switch} from 'react-router-dom'
import Landing from './Landing'
import Footer from './Footer'
import Information from './Information'

const App = () => {
    return(
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/info' component={Information} />
            </Switch>
            <Footer/>
        </div>
    )
}

export default App