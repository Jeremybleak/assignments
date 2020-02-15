import React, { Component } from 'react';
import emailjs from 'emailjs-com'

class Contact extends Component {
    constructor(){
        super()

        this.state={
            name: '',
            nameColor: '',
            email: '',
            emailColor: '',
            message: '',
            messageColor: '',
            status: ''
        }
    }
    handleChange = e =>{
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        let templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        e.preventDefault()
        if(this.state.name === '' || this.state.email === '' || this.state.message === ''){
            if(this.state.name === ''){
                this.setState({
                    nameColor: 'red'
                })
            }else{
                this.setState({
                    nameColor: ''
                })
            }
            if(this.state.email === ''){
                this.setState({
                    emailColor: 'red'
                })
            } else{
                this.setState({
                    emailColor: ''
                })
            }
            if(this.state.message === ''){
                this.setState({
                    messageColor: 'red'
                })
            }else{
                this.setState({
                    messageColor: ''
                })
            }
            console.log(this.state.nameColor)
            this.setState({
                status: "OOPS! YOU'RE MISSING SOMETHING"
            })
            
        } else{
            emailjs.send('gmail','template_xR1TCyQH', templateParams, 'user_xXi8Wnknm7yCR0R6a7mLt')
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.setState({
                status: 'SENT!'
            })
            }, (err) => {
            console.log('FAILED...', err);
            });
            this.setState({
                name: '',
                nameColor: '',
                email: '',
                emailColor: '',
                message: '',
                messageColor: ''
            })

        }
    }
    render() {
        return (
            <div id='contact'  className='contact-container'>
                <div  className='contact'>
                    <div className='contact-contents'>
                        <h1 className='contact-title'>Get In Touch</h1>
                        <div>
                            <form className='form-alignment' action="" onSubmit={this.handleSubmit}>
                                <input className='input-text' style={{borderColor:this.state.nameColor}} onChange={this.handleChange} value={this.state.name} name='name' type="text" placeholder='Name' />
                                <input className='input-text' style={{borderColor: this.state.emailColor}}  onChange={this.handleChange} value={this.state.email} name='email' type="email" placeholder='Email' />
                                <textarea placeholder='Message' style={{borderColor: this.state.messageColor}}  onChange={this.handleChange} value={this.state.message} name='message' className='input-type' rows="4" cols="50">
                                </textarea>
                                <button className='form-button'>SUBMIT</button>
                                <h3 className='status' style={ this.state.status==='SENT!'?{color:'#4072FF'} : {color:'red'}}>{this.state.status}</h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

