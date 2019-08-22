import React, { Component } from 'react';
import { Pokemon } from './PokemonProvider';


class SearchContainer extends Component {
    constructor(props){
        super(props)
        // console.log(props.save,props.id)
        this.state = {
            included: props.save.every(savedItem => savedItem.card.id !== props.id)
        }
    }

    saveCard = () => {
        this.setState({included: false})
        this.props.saveFunc(this.props.id)
    }
    render() {
        return(
            <div className='cardz'>
                <div className='card-header'>
                    {!this.state.included
                    ?
                    <p>Saved!</p>
                    :
                    <button  onClick={this.saveCard}>Save</button>
                     }
                   
                    <h4>Rarity: {this.props.rarity}</h4>
                </div>
                <img className='cards' alt='' src={this.props.imageUrlHiRes}/>
                
            </div>
        )
    }
}

export default Pokemon(SearchContainer)
