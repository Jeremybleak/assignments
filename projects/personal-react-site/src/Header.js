import React from 'react'
// import axios from 'axios'
// import Home from './Home'
import { Pokemon } from './PokemonProvider';

const Header= (props) =>{
 return(
        <div className='headPic'>
            <img src="https://pokemontcg.io/static/media/pokemon-minimalist.30bc8a16.png" alt=""/>
            <form action="" onSubmit={props.searchGet}>
            <input name='search' value={props.search}  placeholder='POKEMON' onChange={props.handleChange}></input> <button></button>
            </form>
        </div>
    )
}


export default Pokemon(Header)