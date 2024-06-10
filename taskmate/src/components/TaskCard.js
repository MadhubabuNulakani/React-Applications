import React from 'react'

const TaskCard = ({task,handleDelete}) => {
    return (
        <li className={task.completed ? 'completed' : 'incompleted'}>
            <span>{task.id} - {task.name}</span>
            <button style={{ cursor: 'pointer' }} onClick={() => handleDelete(task.id)} className='reset'>Delete</button>
        </li>
    )
}

export default TaskCard
