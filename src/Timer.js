import React, { Component } from 'react';
import TotalTime from './TotalTime';
import TimeRemaining from './TimeRemaining';
import TimerButton from './TimerButton';


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
            <TimerButton handleClick={this._timerClick} status={this.state.status} />
        </>
        )
    }
    _handleType = (input) => {
        this.setState({
            input,
            time: input ? input : 0
        })
    }
    _timerClick = () => {
        if (this.state.status) {
            clearInterval(this.interval)
            this.setState({
                status: false
            })
        } else {
            this.setState({
                status: true,
                completion: false
            })
            this.interval = setInterval(() => {
                if (this.state.time >= 1) {
                    this.setState({
                        time: this.state.time - 1
                    })
                } else {
                    this.setState({
                        time: this.state.input,
                        status: false,
                        input: this.state.input,
                        completion: true
                    }, 1000)
                }
            })
        }
    }
}

export default Timer;