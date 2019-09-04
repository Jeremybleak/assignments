import React, { Component } from 'react';
import axios from 'axios'
import Bounty from './Bounty'

class BountyContainer extends Component {
    constructor(){
        super()

       this.state = {
        bounties: []
        }
    }
    componentDidMount(){
        axios.get('/bounties').then(res => {
            this.setState({bounties:res.data})
        })
    }
    render() {
        const mappedBounties = this.state.bounties.map(bounty => <Bounty bounty={bounty} />)
        return (
            <div>
                {mappedBounties}
            </div>
        );
    }
}

export default BountyContainer