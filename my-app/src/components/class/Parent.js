import React, { Component } from 'react'
import Child from '../functional/Child'

export class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Madhu'
        }
    }

    greetParent = (childName) => {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <Child greetParent={this.greetParent} />
            </div>
        )
    }
}

export default Parent
