import React from 'react'
import ReactDOM from 'react-dom'

// My Components
import App from './App'
import PokemonProvider from './PokemonProvider'

// Third-Party Packages
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <PokemonProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </PokemonProvider>, 
    document.getElementById('root'))