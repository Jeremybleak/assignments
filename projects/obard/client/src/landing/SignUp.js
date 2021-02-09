import React from 'react'

export default function SignUp() {
        return (
            <div>
            <h2 className="returning-customers">Returning Customers</h2>
            <form className="login-form" action="">
                <h3>Username</h3>
                <input className='login-username-input' type="text"/>
                <h3>Password</h3>
                <input className='login-password-input' type="password"/>
                <h3>Confirm Password</h3>
                <input className='login-password-input' type="password"/>
                <button className="login-button">Create an Account</button>
            </form>
        </div>
        )
}
