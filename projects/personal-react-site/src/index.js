import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import PokemonProvider from './PokemonProvider'

ReactDOM.render(
    <PokemonProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </PokemonProvider>, 
    document.getElementById('root'))