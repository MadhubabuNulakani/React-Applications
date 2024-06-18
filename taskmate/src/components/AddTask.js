import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Form } from 'react-bootstrap'
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './addtask.css'
import Select from '@mui/material/Select';

const AddTask = ({ tasks, updateTasks }) => {
    const [taskDetails, setTaskDetails] = useState({
        id: '',
        name: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskDetails((prevTask) => ({
            ...prevTask,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskDetails.name,
            status: taskDetails.status
        }
        updateTasks([...tasks,task])
    }

    const handleReset = () => {
        setTaskDetails({
            name: '',
            status: ''
        })
    }

    return (
        <section className='addtask'>
            <Card style={{ width: "400px", margin: "10px" }}
                className="shadow"
                border="primary">
                <CardHeader><div>Add New Task</div></CardHeader>
                <CardBody>
                    <Form className="form" onSubmit={handleSubmit}>
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-weight">Task </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                type='text'
                                value={taskDetails.name}
                                required
                                name="name"
                                placeholder='Enter Task Name'
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                                label="Weight"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Status"
                                value={taskDetails.status}
                                placeholder='Select status of the task'
                                required
                                name="status"
                                onChange={handleChange}
                            >
                                <MenuItem value={'completed'}>Completed</MenuItem>
                                <MenuItem value={'inprogress'}>In-Progress</MenuItem>
                                <MenuItem value={'pending'}>Pending</MenuItem>
                            </Select>
                        </FormControl>
                        <div className='buttons'>
                            <Button type="submit" variant="contained" endIcon={<AddBoxIcon />}>
                                Add New Task
                            </Button>
                            <Button type="button" variant="contained" onClick={handleReset} endIcon={<RestartAltIcon />} color='error'>
                                Reset
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </section>
    )
}

export default AddTask
