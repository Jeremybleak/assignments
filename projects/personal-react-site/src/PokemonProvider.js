import React from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class PokemonProvider extends React.Component{
    constructor(){
        super()
        
        this.state={
            search:'',
            poke: [],
            save: JSON.parse(localStorage.getItem('savedPokemon')) || [],
            saved: false
        }
    }
   
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    saveFunc = (id) =>{
        axios.get(`https://api.pokemontcg.io/v1/cards/${id}`).then(response=>{
            console.log(response.data)
            this.setState(({save})=>({save:[...save, response.data ]}), ()=> {
                console.log(this.state.save)
                localStorage.setItem('savedPokemon', JSON.stringify(this.state.save))
            })
        })
    }
    deleteAll = () =>{
        localStorage.removeItem('savedPokemon')
        
    }
    deleteFunc = (id) =>{
       this.setState(({save}) => ({save: save.filter(poke => poke.card.id !== id)}), () => {
           console.log(this.state.save)
           localStorage.setItem('savedPokemon', JSON.stringify(this.state.save))
       })
    }
    searchGet= (e) =>{
        e.preventDefault()
        axios.get(`https://api.pokemontcg.io/v1/cards?name=${this.state.search}`).then(response =>{
            this.setState({poke:response.data.cards})
        })
    }

  
    

    render(){
        return(
            <Provider value={{deleteAll: this.deleteAll, searchGet: this.searchGet, handleChange: this.handleChange, saveFunc: this.saveFunc,deleteFunc:this.deleteFunc, ...this.state,}}>{this.props.children}</Provider>
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