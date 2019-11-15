import React, { Component } from 'react'

export default class Timer extends Component {

constructor (props){
super (props)
this.state={
    status: false,
    runTime: 0,
    seconds:0,
    hours:0,
    minutes:0
}
setInterval( () => {
    if(this.state.status){ 
    this.setState({
        runTime: this.state.runTime + 1000
    })
    this.mstotime(this.state.runTime)
} 
},
    1000
    )
}

mstotime = ( ms ) => {
    this.setState({
    hours: Math.floor(ms / 3600000),
    minutes: Math.floor((ms - (this.state.hours * 3600000)) / 60000),
    seconds: Math.floor((ms - (this.state.hours * 3600000) - (this.state.minutes * 60000)) / 1000)
    })
}

Click = () => {
    this.setState( {status: !this.state.status} )
}

Reset = () => {
    this.setState({ status:false, runTime: 0, seconds:0, hours:0, minutes:0 });
};

    render() {
        return (<div className="container">
        <div className="full-timer-container">
            <div className="time-container">
                <p className="timer-form">{String(this.state.hours).padStart(2, '0')}:</p>
                <p className="timer-comment">hours</p>
            </div>
            <div className="time-container">
                <p className="timer-form">{String(this.state.minutes).padStart(2, '0')}:</p>
                <p className="timer-comment">Minute</p>
            </div>
            <div className="time-container">
                <p className="timer-form">{String(this.state.seconds).padStart(2, '0')}</p>
                <p className="timer-comment">second</p>
            </div>
        </div>
        <div>
            <button className="btn btn-outline-primary" onClick={this.Click}>{this.state.status ? 'Stop' : 'Start'}</button>
            <button className="btn btn-outline-primary" onClick={this.Reset}>Reset</button>
        </div>
    </div>
        )
    }
}
