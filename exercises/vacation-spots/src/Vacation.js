// import React from 'react'
// import Cards from './Cards'

// const Vacation = () =>{
//     let vacationSpots = [
//         {
//           place: "Meridian, Idaho",
//           price: 40,
//           timeToGo: "Spring"
//         },{
//           place: "Cancun",
//           price: 900,
//           timeToGo: "Winter"
//         },{
//           place: "China",
//           price: 1200,
//           timeToGo: "Fall"
//         },{
//           place: "Russia",
//           price: 1100,
//           timeToGo: "Summer"
//         },{
//           place: "Lebanon",
//           price: 400,
//           timeToGo: "Spring"
//         }
//       ]
//       const mappedCards = vacationSpots.map(spot=> <Cards place={spot.place} price={spot.price} timeToGo={spot.timeToGo} /> )
//     return(
//         <div>
//         {mappedCards}
//         </div>
//     )
// }

// export default Vacation

import React from 'react'
import Cards from './Cards'

const Vacation = () =>{
    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]
    const mappedCards = vacationSpots.map(spot => <Cards place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)
    return(
        <div>
        {mappedCards}
        </div>
    )
}
export default Vacation