import React, { Component } from 'react';
import TotalTime from './TotalTime';
import TimeRemaining from './TimeRemaining';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
        <>
            <TimeRemaining time={this.state.time} completion={this.state.completion} />        
            <TotalTime input={this.state.input} handleType={this._handleType} />
        </>
        )
    }
    _handleType = (input) => {
        this.setState({
            input,
            time: input ? input : 0
        })
    }
}

export default Timer;