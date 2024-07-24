import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import TaskContext from '../context/TaskProvider';

const TaskModal = ({ setIsModal }) => {
    const { handlePostTasks, title, setTitle, type, setType, description, setDescription } = useContext(TaskContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        handlePostTasks();
        setIsModal(false);
    }
    return (
        <div className='task-modal-container'>
            <div className='task-modal-wrapper'>
                <div className='modal-header'>
                    <h2>Create Task</h2>
                    <FaTimes onClick={() => setIsModal(false)} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='task-info-div'>
                        <label htmlFor="title">Title: </label>
                        <input 
                            id="title"
                            type="text"
                            placeholder='Enter your task title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className='task-info-div'>
                        <label htmlFor="description">Description: </label>
                        <input 
                            id="description"
                            type="text"
                            placeholder='Enter your task description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className='task-info-div'>
                        <label htmlFor="type">Type: </label>
                        <select 
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select type</option>
                            <option value="farming">Farming</option>
                            <option value="content">Content</option>
                            <option value="design">Design</option>
                        </select>
                    </div>
                    <button type="submit">Create Task</button>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
