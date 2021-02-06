import React from 'react'
//css
import "./landingCSS/landing.css"

export default function Login() {
        return (
            <div>
                <form className="login-form" action="">
                    <input className='login-username-input' type="text"/>
                    <input type="password"/>
                    <button>login</button>
                </form>
            </div>
        )
}
