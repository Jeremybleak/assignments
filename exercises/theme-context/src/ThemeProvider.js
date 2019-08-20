import React from 'react'
const {Consumer, Provider} = React.createContext()

class ThemeProvider extends React.Component{
    constructor(){
        super()

        this.state={
            theme: 'dark',
            on: false
        }
    }
    switchTheme = () => {
        this.setState(prevState =>{
            return{
                on: !prevState.on
            }
        })
    }
    render(){
        return(
        <Provider  value={{...this.state, switch:this.switchTheme}}>{this.props.children} </Provider>

    )}
}

export default ThemeProvider

export const daTheme = (Comp) =>{
    return (props) => 
        <Consumer>
            {value => <Comp {...value} {...props} />}
        </Consumer>
    
}