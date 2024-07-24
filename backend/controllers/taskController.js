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
        return res.status(201).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { createTask, getAllTasks };
