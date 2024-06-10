import React, { useState } from 'react'

const AddSub = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='box'>
            <p>{count}</p>
            <button  className='add' onClick={() => setCount(count => count + 1)}>Add</button>
            <button  className='sub' onClick={() => setCount(count => count - 1)}>Sub</button>
            <button className='reset' onClick={() => setCount(0)}>Reset</button>
        </div>

    )
}

export default AddSub
