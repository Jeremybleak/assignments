import React, { Component } from 'react';

class Contact extends Component {
    constructor(){
        super()

        this.state={

        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div id='contact'  className='contact-container'>
                <div  className='contact'>
                    <div className='contact-contents'>
                        <h1 className='contact-title'>Get In Touch</h1>
                        <div>
                            <form className='form-alignment' action="" onSubmit={this.handleSubmit}>
                                <input className='input-text' type="text" placeholder='Name' />
                                <input className='input-text' type="email" placeholder='Email' />
                                <textarea placeholder='Message' className='input-type' rows="4" cols="50">
                                </textarea>
                                <button className='form-button'>SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

