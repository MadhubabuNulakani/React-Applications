import React, { Component } from 'react'

export class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello'
        }
    }
    changeHandler() {
        this.setState({
            message: "Good Bye..!"
        })
    }

    clickHandler = () => {
        this.setState({
            message: "Good Bye..!"
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.message}</div>
                <div>
                    {/* <button onClick={this.changeHandler.bind(this)}>Click me</button> */}
                    <button onClick={this.clickHandler}>Click me</button>
                </div>
            </div>
        )
    }
}

export default EventBind
