import React from 'react'
import { provideTodo } from './TodoProvider';

class Form extends React.Component{
    constructor(){
        super()

    }
    handleChange = e =>{
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    render(){

        return(
            <div>
                <form action="">
                    <input type="text" name='title' value={this.props.s} onChange={this.handleChange} placeholder='Title'/>
                    <input type="text" name='description' value={this.props.s} onChange={this.handleChange} placeholder='Description'/>
                    <input type="text" name='price' value={this.props.s} onChange={this.handleChange} placeholder='Price'/>
                    <input type="text" name='imgUrl' value={this.props.s} onChange={this.handleChange} placeholder='imgUrl'/>
                </form>
            </div>
        )
    }
}

export default provideTodo(Form)