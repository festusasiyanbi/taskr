import { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchAllTasks = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found');
            setLoading(false);
            return;
        }
        try {
            const response = await fetch('/api/tasks', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setTasks(data);
            setLoading(false);
            setError("");
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    const handlePostTasks = async () => {

        if (!type || !title || !description) {
            setError('All fields are required');
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            setError('User not authenticated');
            return;
        }

        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ type, title, description }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

            const data = await response.json();
            setSuccess(data.message);
            console.log(data, data.message);
            setType('');
            setTitle('');
            setDescription('');
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchAllTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ 
            tasks, setTasks, loading, 
            error, handlePostTasks, type, 
            setType, title, setTitle, 
            description, setDescription,
            success
         }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskContext;
