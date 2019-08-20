import React from 'react'
import {Provider, Consumer} from React.createContext()

class TodoProvider extends React.Component{
    constructor(){
        super()

        this.state={
            title:'',
            description: '',
            price: '',
            imgUrl: ''
        }
    }
 
    render(){
        return(
            <Provider {...this.state}>{this.props.children}</Provider>
        )
    }
}

export default TodoProvider

export const provideTodo = (Comp) =>{
    return (props) =>{
        <Consumer>
            {value => <Comp {...props} {...value}/>}
        </Consumer>
    }
}