import React from 'react'

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            fName: '',
            lName: '',
            eMail: '',
            birth: '',
            phone: '',
            food: '',
            names: [],
        }
    }
    handleChange = e =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e =>{
        e.preventDefault()
        const {fName, lName, eMail, birth, food} = this.state
        const badgeName = `${fName} ${lName}`
        const badgeEmail = `${eMail}`
        const birthPlace = `${birth}`
        const favFood = `${food}`
        this.setState( prevState => {
            return{
                // names: [...prevState.names, ...prevState.eMailArr,...prevState.birthArr,...prevState.foodArr, badgeName, badgeEmail, birthPlace, favFood],
                fName: '',
                lName: '',
                eMail: '',
                birth: '',
                food: '',
            }
        })
    }
    render(){
       
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='First Name'  name='fName' value={this.state.fName} onChange={this.handleChange}/>
                    <input type="text" placeholder='Last Name' name='lName' value={this.state.lName} onChange={this.handleChange}/>
                    <input type="text" placeholder='Email' name='eMail' value={this.state.eMail} onChange={this.handleChange}/>
                    <input type="text" placeholder='Place of Birth' name='birth' value={this.state.birth} onChange={this.handleChange}/>
                    <input type="text" placeholder='Phone' name='phone' value={this.state.phone}/>
                    <input type="text" placeholder='Favorite Food' name='food' value={this.state.food} onChange={this.handleChange}/>
                    <button>Submit!</button>
                </form>
                <div>
                    <h1>Badge</h1>
                </div>
            </div>
        )
    }
}

export default Form