import React from 'react'
import axios from 'axios'

class Form extends React.Component{
    constructor(){
        super()

        this.state={
            title:'',
            description: '',
            price: '',
            imgUrl:''
        }
    }
    handleChange= (e) =>{
        const{name, value} = e.target
        this.setState({
            [name]: value,
        })
        
        }
    handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://api.vschool.io/jeremy/todo', this.state)
    }
    render(){
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                <input type="text" name='title' value={this.state.title} onChange={this.handleChange} placeholder='Title' />
                <input type="text" name='description' value={this.state.description} onChange={this.handleChange} placeholder='Description' />
                <input type="text" name='price' value={this.state.price} onChange={this.handleChange} placeholder='Price' />
                <input type="text" name='imgUrl' value={this.state.imgUrl} onChange={this.handleChange} placeholder='Image URL' />
                <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default Form