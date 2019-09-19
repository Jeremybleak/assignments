import React from 'react';
import Nav from './Nav'
import {Route, Switch} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route path='/signup' component={Signup}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/todos' component={}></Route>
            </Switch>
        </div>
    );
};

export default App;