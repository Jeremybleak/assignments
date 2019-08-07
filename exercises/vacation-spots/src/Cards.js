// import React from 'react'

// const Cards = (props) =>{
//     return(
//         <div>
//         <h2>Place: {props.place}</h2>
//         <h2>Price: {props.price}</h2>
//         <h2>Best Season: {props.timeToGo}</h2>
//         <br></br>
//         </div>
//     )
// }

// export default Cards

import React from 'react'

const Cards =(props) =>{
    return(
        <div>
        <h1>Place:{props.place}</h1>
        <h1>Price:{props.price}</h1>
        <h1>Best Season:{props.timeToGo}</h1>
        </div>
    )
}
export default Cards