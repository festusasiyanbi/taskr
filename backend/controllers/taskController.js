import Task from "../models/taskModel.js";

const createTask = async (req, res) => {
    const { type, status = "not started", title, description } = req.body;

    if (!type || !title || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const task = new Task({
            type,
            status,
            title,
            description,
            user: req.user._id,
        });

        await task.save();
        return res.status(201).json({
            message: "Task successfully created",
            task,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user._id }).exec();
        if (tasks.length === 0) {
            return res.status(204).json({ message: "No tasks yet, enjoy the silence." })
        }
        return res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOneAndDelete({ _id: id, user: req.user._id });
        if (!task) {
            return res.status(404).json({ error: "No task found or user not authorized" });
        }
        return res.status(200).json({ message: "Task successfuly deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, type, description } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(
            id,
            { title, type, description },
            { new: true, runValidators: true }
        );
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json({ message: "Task successfully updated", task });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


const updateTaskStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const task = await Task.findOneAndUpdate(
            { _id: id, user: req.user._id },
            { status },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        return res.status(200).json({
            message: "Task successfully updated",
            task,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


export { createTask, getAllTasks, deleteTask, updateTask, updateTaskStatus };
