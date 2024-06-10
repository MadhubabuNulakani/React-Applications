import React, { useState } from 'react'
import TaskCard from './TaskCard';

const List = (props) => {
    const [tasks, setTasks] = useState(props.tasks)

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const style = {
        margin: '10px',
        borderRadius: '10px',
        background: 'maroon',
        color: 'white'
    }
    return (
        <div>
            <h1 style={style}>Tasks List</h1>
            {tasks.length >= 1 && (
                <ul>
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default List
