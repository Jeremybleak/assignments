import React from 'react'

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            fName: '',
            lName: '',
            names: []
        }
    }
    handleChange = e =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    submitFunciton= e =>{
        e.preventDefault()
        const {fName, lName} = this.state
        const newName = `${fName} ${lName}`
        
        this.setState( prevState =>{
            return{
                names: [...prevState.names, newName],
                fName: '',
                lName: ''
            }
        })
    }
    render(){
        const mappedNames = this.state.names.map((name, i)=>{
            return(
                <li key={i}>{name}</li>
            )
        })
        return(
            <div>
                <form action="" onSubmit={this.submitFunciton}>
                    <label htmlFor="">Name:</label>
                    <input type="text" name='fName' placeholder="First" value={this.state.fName} onChange={this.handleChange}/>
                    <input type="text" name='lName' placeholder="Last" value={this.state.lName} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <ul>{mappedNames}</ul>
            </div>
        )
    }
}

export default Form