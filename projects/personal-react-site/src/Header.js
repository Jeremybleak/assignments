import React from 'react'
// import axios from 'axios'
// import Home from './Home'
import {withRouter} from 'react-router-dom'
import { Pokemon } from './PokemonProvider';

const Header= (props) =>{
 return(
        <div className='headPic'>
            <img className='headerimg' src="https://pokemontcg.io/static/media/pokemon-minimalist.30bc8a16.png" alt=""/>
            <form action="" onSubmit={(e) => {
                props.history.push('/search')
                props.searchGet(e)
                }}>
            <input name='search' value={props.search}  placeholder='Search any Pokemon and get its cards!' onChange={props.handleChange}></input> <button className='buttonz'><img  src="https://www.pinclipart.com/picdir/big/15-153148_search-magnifying-glass-icon-black-search-icon-png.png" alt=""/></button>
            </form>
        </div>
    )
}


export default withRouter(Pokemon(Header))