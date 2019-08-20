import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { daTheme } from './ThemeProvider';
import './App.css'

const App =()=>{
    return(
        <div>
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default daTheme(App)