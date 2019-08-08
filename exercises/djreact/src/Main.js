import React from 'react'

class Main extends React.Component{
    constructor(){
        super()
        this.state ={
            squares: ['white','white','white','white']
        }
    }
    blackOrWhite = () =>{
       if(this.state.squares[0]=== 'white'){
           this.setState({
               squares: ['black', 'black', 'black', 'black']
           })
       }else if(this.state.squares[0] === 'black'){
        this.setState({
            squares: ['white','white','white','white']
        })
       }
    }
    redOrWhite = () =>{
        if(this.state.squares[1] === 'white'){
            this.setState({
                squares: ['purple', 'purple', 'white', 'white']
            })
        }else if(this.state.squares[1] === 'purple'){
            this.setState({
                squares: ['white','white','white','white']
            })
        }else if(this.state.squares[1] === 'black'){
            this.setState({
                squares: ['purple', 'purple', 'white', 'white']
            })
        }
    }
    blueOrBlue=()=>{
        if(this.state.squares[2]=== 'white'){
            this.setState({
                squares:['white','white','blue','white']
            })
        }else if(this.state.squares[2]=== 'blue'){
            this.setState({
                squares: ['white','white','white','white']
            })
        }
    }
    blue=()=>{
        if(this.state.squares[3]=== 'white'){
            this.setState({
                squares:['white','white','white','blue']
            })
        }else if(this.state.squares[3]=== 'blue'){
            this.setState({
                squares: ['white','white','white','white']
            })
        }
    }
    render(){
        return(
            <div className='app-container'>
                <div className="square"style={{background: this.state.squares[0]}} onClick={this.blackOrWhite}></div>
                <div className="square"style={{background: this.state.squares[1]}} onClick={this.redOrWhite}></div>
                <div className="square"style={{background: this.state.squares[2]}} onClick={this.blueOrBlue}></div>
                <div className="square"style={{background: this.state.squares[3]}}onClick={this.blue}></div>
             </div>
        )
    }
    }
export default Main