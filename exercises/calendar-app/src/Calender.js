import React, {Component} from 'react'
import Calenders from 'react-calendar'

class Calender extends Component {
    constructor(){
        super()

        this.state ={
            date: new Date(),
            date2: []
        }
    }
    onChange = date => this.setState({ date })
    render(){
        console.log(this.state.date)
        console.log(this.state.date2)
        return(
            <div>
                <Calenders
                    onChange={this.onChange}
                    value={this.state.date}
                />
                <input type="date"onChange={this.onChange2} value={this.state.date2}/>
            </div>
        )
    }
}

export default Calender