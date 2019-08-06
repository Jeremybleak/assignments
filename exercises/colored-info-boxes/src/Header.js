import React from 'react'

const Header = (props) =>{
    let {color, backgroundColor} = props;
    const styles ={
        color,
        backgroundColor,
        height: 50,
    }
    return(
        <div>
            <div style={styles}>
            {props.title}
            {props.subtitle}
        </div>
        </div>
    )
}
export default Header