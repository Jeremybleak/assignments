import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

class personContainer extends React.Component {
    constructor(){
        super()
        this.state={
            starWars: []
        }
    }
    componentDidMount(){
        axios.get(' https://swapi.co/api/people/').then(response => {
            this.setState({starWars: response.data})
            console.log(response.data)
        })
    }

    render(){
        mappedCharacters = this.state.starWars.map((person,i) => {
            return(
                <Link key={i} name={person.name} height={person.height} hair={person.hair_color} skin={person.skin_color} eye={person.eye_color} />
            )
        })
        return(
        <div>
            <Header/>
            <Switch>
                <Route />
            </Switch>

        </div>
        )
    }
}
export default personContainer