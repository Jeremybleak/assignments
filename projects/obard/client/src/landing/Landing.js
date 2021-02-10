import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'

//css Imports
import './landingCSS/landing.css'

export default class Landing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             account: true,
        }
    }
    
    accountChange = (e) =>{
        e.preventDefault()
        let value = this.state.account
        this.setState({
            account: !value
        })
        console.log(this.state.account)
    }
    
    render() {
        console.log(this.state.account)
        return(
            <div className='landing-background'>
                <div className='landing-filter-background'>
                    <div className="landing-container-div">
                        <div className='description-copy-container'>
                            <h1 className='logo'>O-D</h1>
                            <h2 className='description'>Rent a plane for personal or instructional use today!</h2>
                            <h3>{this.state.account === true ? "Not Registered?" : "Already Registered?"}    <button className="form-switch-button" onClick={this.accountChange}>{this.state.account === true ? 'Sign Up Here!' : 'Login'}</button></h3>
                        </div>
                        <div className='dividing-line'></div>
                        <div className='alternating-form-container'>
                            {this.state.account === true ? <Login/> :<SignUp/>}
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
