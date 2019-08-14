import React from 'react'

class Person extends React.Component{
    constructor(){
        super()
        this.state={
            poop: true,
            strike: true
        }
    }
    handleClick = () =>{
       console.log('Fired')
       this.setState(prevState=>{
           let result = prevState.poop ? false : true 
           let strikeResult = prevState.strike ? false : true
           return{
                    poop: result,
                    strike: strikeResult
           }
       })
    }
    render(props){
    return(
        <div className='personContainer'>
            <h1 className='holla' onClick={this.handleClick} style={{textDecoration: this.state.strike ? '' : 'line-through red'}}>{this.props.name}</h1>
            <img className='hov' src={this.props.image} style={{display: this.state.poop ? '' : 'none'}}></img>
        </div>
    )
    }
}


export default Person