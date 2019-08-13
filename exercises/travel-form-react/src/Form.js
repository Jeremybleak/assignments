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
    jeremy = e =>{
        const{name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    submitFunction = e =>{
        e.preventDefault()
        const {fName, lName} = this.state
        const newName = `${fName} ${lName}`
 
        this.setState( prevState => {
            return{
                names: [...prevState.names, newName],
                fName: '',
                lName: '',
            }
        })
 
     }
    render(){
        let mappedNames = this.state.names.map((name,i)=>{
            return(
                <li key={i}>{name}</li>
            )
        })
        return(
            <div>
                <form onSubmit={this.submitFunction}>
                   <label htmlFor="">First</label> <input type="text" name='fName' value={this.state.fName} onChange={this.jeremy}/>
                   <br/>
                    <label>Last</label><input type="text" name='lName' value={this.state.lName} onChange={this.jeremy}/>
                   <br/>
                    <button>Submit!</button>
                </form>
                <ul>{mappedNames}</ul>
            </div>
        )
    }
}

export default Form