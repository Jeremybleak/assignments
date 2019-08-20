import React from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class PokemonProvider extends React.Component{
    constructor(){
        super()
        
        this.state={
            search:'',
            poke: []
        }
    }
   
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    
    searchGet= (e) =>{
        e.preventDefault()
        console.log(this.state.search)
        axios.get(`https://api.pokemontcg.io/v1/cards?name=${this.state.search}`).then(response =>{
            console.log(response.data.cards)
            this.setState({poke:response.data.cards})
        })
    }

  
    

    render(){
        return(
            <Provider value={{searchGet: this.searchGet, handleChange: this.handleChange, ...this.state,}}>{this.props.children}</Provider>
        )
    }
}

export default PokemonProvider

export const Pokemon = Comp => {
    return (props) =>
        <Consumer>
        {value => <Comp {...value} {...props}/>}
        </Consumer>
    
}