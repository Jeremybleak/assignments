import React from 'react'

const Bounty = (props) => {
    let {firstName, lastName, living, bountyAmmount, type} = props.bounty
    return (
        <div>
            <h1>
                {firstName} {lastName}
            </h1>
            <h3>
                {bountyAmmount}
            </h3>
            <h3>
                {type}
            </h3>
        </div>
    )
}

export default Bounty