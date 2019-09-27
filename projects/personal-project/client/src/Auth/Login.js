import React from 'react'
import './Auth.css'
import {Link} from 'react-router-dom'
import { withContext } from '../ContextProvider';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            errMessage: ''
        };

    }
    handleChange = (e) =>{
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.login(this.state)
        .then(() => this.props.history.push('/home')).catch((err) =>{
            this.setState({errMessage: err.response.data.message})
        })
    }
    render() {
        return (
        <div className='home-title'>
        <div className='arcade-title-box'>
            <div className='form-alignment'>
                <h1 className='auth-title'> Login <img className='peach-img' src="https://steemitimages.com/DQmUrknJEgHi2gG9wEUZHNrwychPUAef5pg9e4kaMdFZzPK/peach.png" alt=""/> </h1>
                <div>
                    <form action="" className='login-signup-form' onSubmit={this.handleSubmit} >
                        <input type="text" name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>
                        <input type="password" name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
                        <button>Login!</button>
                     </form>
                </div>
                <Link to='/signup'>Dont have an account already? Sign up!</Link>
            </div>
            <h4 style={{color: 'red', textAlign: 'center'}}>{this.state.errMessage}</h4>
        </div>
    </div>
           
        );
    }
}

export default withContext(Login);