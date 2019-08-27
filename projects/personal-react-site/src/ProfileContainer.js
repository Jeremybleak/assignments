import React from 'react'
import { Pokemon } from './PokemonProvider';

const ProfileContainer = (props) =>{
    return(
        <div className='cardz'>
            <div className='card-header'>
            <button className='save-button' onClick={()=> props.deleteFunc(props.id)}>Delete</button>
            <h4>Rarity: {props.rarity}</h4>
            </div>
            <img className='cards1' src={props.imgUrl} alt=""/>
        </div>
    )
}

export default Pokemon(ProfileContainer)