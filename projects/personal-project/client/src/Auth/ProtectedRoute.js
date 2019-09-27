import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { withContext } from '../ContextProvider'

function ProtectedRoutes (props) {
    const {component: Comp, ...rest} = props
    return (
        props.token ?
        <Route {...rest} component={Comp} /> :
        <Redirect to='/' />
    )
}

export default withContext(ProtectedRoutes)