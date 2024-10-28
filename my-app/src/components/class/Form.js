import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topics: ''
        }
    }

    changeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    changeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    changeTopics = (event) => {
        this.setState({
            topics: event.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        alert(`${this.state.userName},${this.state.comments},${this.state.topics}`)
    }

    render() {
        const { userName, comments, topics } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <lable className="">User Name</lable>
                    <input type='text' value={userName} onChange={this.changeUserName} />
                </div>
                <div>
                    <lable className="">Comments</lable>
                    <textarea type='text' value={comments} onChange={this.changeComments} />
                </div>
                <div>
                    <lable className="">topics</lable>
                    <select value={topics} onChange={this.changeTopics}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
