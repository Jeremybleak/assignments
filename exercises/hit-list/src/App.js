import React from 'react'
import axios from 'axios'
import Person from './Person'
import './App.css'
import Header from './Header'

class App extends React.Component{
    constructor(){
        super()

        this.state={
            hitList: []
        }
    }
 componentDidMount(){
     axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
         this.setState({hitList: response.data})
         console.log(response.data)
     })
 }

 render(){
     const mappedHitList = this.state.hitList.map((person,i)=>{
         return(
         <Person key={i} name={person.name} image={person.image}/>
         )
     })
     return(
         <div >
             <Header/>
             <div className='mapContainer'>
            {mappedHitList}
             </div>
         </div>
     )
 }
}

export default App