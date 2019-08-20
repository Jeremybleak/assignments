import React from 'react'
// import axios from 'axios'

class Profile extends React.Component{
    constructor(){
        super()

        this.state={
            poke:[]
        }
    }
    // componentDidMount(){
    //     // axios.get('hhtps://api.pokemoncg.io/v1/cards?name=charzard').then(response =>{
    //         console.log(response.data)
    //         this.setState({poke:response.data})

    //     })
    // }
    render(){
        
        return(
            <div>
                Profile
            </div>
        )
    }
}

export default Profile