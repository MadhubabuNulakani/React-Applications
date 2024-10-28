import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={() => props.greetParent('sai')}>Greet Parent</button>
        </div>
    )
}

export default Child
