import React from 'react'

class TodoProvider extends React.Component{
    constructor(){
        super()

        this.state ={
            todos: [],
            user:{},
            token: ''

        }
    }
    render(){
        return(
            <div>
                <Provider>
                    
                </Provider>
            </div>
        )
    }
}

export default TodoProvider


// export withContext
