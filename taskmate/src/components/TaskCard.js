import React from 'react'
import './taskcard.css'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

import ButtonGroup from '@mui/material/ButtonGroup';
const TaskCard = ({ task, handleDelete }) => {
    const className1 = `li ${task.status}`;
    return (
        <li className={className1}  >
            <span>{task.id} - {task.name}</span>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
            >
                <IconButton aria-label="delete" color="error" onClick={() => handleDelete(task.id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" color="primary" >
                    <EditIcon />
                </IconButton>
            </ButtonGroup>
        </li>
    )
}

export default TaskCard
