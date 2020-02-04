import React, { Component } from 'react';


class App extends Component {
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
            <div>
                <div class="mdc-text-field">
                    <input type="text" id="my-text-field" class="mdc-text-field__input"/>
                    <label class="mdc-floating-label" for="my-text-field">Label</label>
                <div class="mdc-line-ripple"></div>
                </div>
                <div class="mdc-text-field-helper-line">
                    <div class="mdc-text-field-helper-text">helper text</div>
                </div>
           </div>
        );
    }
}

export default App;