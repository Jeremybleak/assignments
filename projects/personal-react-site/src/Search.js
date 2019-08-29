import React from 'react'

import { Pokemon } from './PokemonProvider';
import SearchContainer from './SearchContainer'

class Search extends React.Component{
    render(){
        const pokemonMapped = this.props.poke
                    .map(pokes => <SearchContainer key={pokes.id} 
                                                id={pokes.id} 
                                                rarity={pokes.rarity} 
                                                set={pokes.set} 
                                                pokedex={pokes.nationalPokedexNumber} 
                                                name={pokes.name} 
                                                imgUrl={pokes.imgUrl} 
                                                imageUrlHiRes={pokes.imageUrlHiRes}/>)
        return(
            <div>
                <div className='card-container'>
                    <div className='search-container'>
                        <form onSubmit={this.props.searchGet}>
                            <label>Search:</label> 
                            <br/>
                            <input className='search-bar' 
                                   name='search' 
                                   value={this.props.search}  
                                   placeholder='Search any Pokemon and get its cards!' 
                                   onChange={this.props.handleChange} />
                            <button className='button-search'>
                                <img src="https://www.pinclipart.com/picdir/big/15-153148_search-magnifying-glass-icon-black-search-icon-png.png" alt=""/>
                            </button>
                        </form>
                    </div>
                    
                    <div className='search-container-cards'>
                        {pokemonMapped}
                    </div>
                </div>
            </div>
        )
}
}
export default Pokemon(Search)