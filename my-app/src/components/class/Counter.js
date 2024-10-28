import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    render() {
        return (
            <div>
                <div>Count Value - {this.state.count}</div>
                <div> <button onClick={() => this.increment()}>Increment</button> </div>
            </div>
        )
    }
}
