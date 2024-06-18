import React, { useState } from 'react'
import TaskCard from './TaskCard';
import './list.css'

const List = ({ tasks, setTasks }) => {

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }


    return (
        <>
            {
                tasks.length >= 1 && (<section className='displaylist'>
                    <div className='title'>Tasks List</div>
                    <ul className='ul'>
                        {tasks.map(task => (
                            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                        ))}
                    </ul>
                </section>)
            }
        </>
    )
}

export default List
