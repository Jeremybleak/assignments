import React from 'react'
import ProfileContainer from './ProfileContainer'
import { Pokemon } from './PokemonProvider';
// import axios from 'axios'

class Profile extends React.Component{
    render(){
        const mappedSavedCards = this.props.save.map(saved => <ProfileContainer key={saved.id} id={saved.card.id} rarity={saved.card.rarity} imgUrl={saved.card.imageUrlHiRes}/>)
        return(
            <div >
                <h1>Saved Cards:</h1>
                <button onClick={this.props.deleteAll}>Delete All</button>
                <div className='search-container-cards'>
                {mappedSavedCards}
                </div>
            </div>
        )
    }
}

export default Pokemon(Profile)