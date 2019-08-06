import React from 'react'
import Header from './Header'

const App = () =>{
    return(
        <div>
        <Header title ="I finally found my precious eraser in my favorite pocket" subtitle="" color='green'/>
        <Header title ="I finally found my precious eraser in my favorite" subtitle=" I" color='red'/>
        <Header title ="I finally found my precious eraser in my" subtitle=" I need" color='yellow'/>
        <Header title ="I finally found my precious eraser in" subtitle=" I need a" color='purple'/>
        <Header title ="I finally found my precious eraser" subtitle=" I need a bigger" color='blue'/>
        <Header title ="I finally found my precious" subtitle=" I need a bigger eraser" color='green'/>
        <Header title ="I finally found my" subtitle=" I need a bigger eraser to" color='red'/>
        <Header title ="I finally found" subtitle=" I need a bigger eraser to remove" color='yellow'/>
        <Header title ="I finally" subtitle=" I need a bigger eraser to remove my" color='purple'/>
        <Header title ="I" subtitle=" I need a bigger eraser to remove my stepdad's" color='blue'/>
        <Header title ="" subtitle=" I need a bigger eraser to remove my stepdad's car" color='white' backgroundColor ='Black'/>
        </div>
    )
}

export default App