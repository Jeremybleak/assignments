import React from 'react'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            fName: '',
            lName: '',
            names: []
        }
    }
    nameValue = e =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
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

        const mappedNames = this.state.names.map((name, i) => {
            return(
                <li key={i}>{name}</li>
        )
        })
        return(
            <div>
                <form action="" onSubmit={this.submitFunction}>
                    <label>Name:</label>
                    <input type="text" placeholder='First' name='fName' value={this.state.fName} onChange={this.nameValue}/>
                    <input type="text" placeholder="Last" name='lName' value={this.state.lName} onChange={this.nameValue}/>
                <button type='submit'>submit</button>
                </form>
                <ul>{mappedNames}</ul>
            </div>
        )
    }
}

export default Form