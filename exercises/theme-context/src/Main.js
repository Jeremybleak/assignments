import React from 'react'
import { daTheme } from './ThemeProvider';

const Main = (props) =>{
    return(
        <div className={props.on ? 'dark-theme' : 'light-theme'}>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolores aliquid temporibus eligendi minus eius quaerat ratione ad. Ducimus, illum maxime. Cum dicta vitae molestiae magni minus rem, vero possimus!</h1>
        <button onClick={props.switch}>Make the switch today!</button>
        </div>
    )
}

export default daTheme(Main)