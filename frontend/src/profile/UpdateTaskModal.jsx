import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import TaskContext from "../context/TaskProvider";

const UpdateTaskModal = ({ isUpdateModal, setIsUpdateModal }) => {
  const { handleUpdateTask } = useContext(TaskContext);
  const [taskId, setTaskId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (isUpdateModal) {
      const task = isUpdateModal;
      setTaskId(task._id);
      setTitle(task.title);
      setDescription(task.description);
      setType(task.type);
    }
  }, [isUpdateModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      _id: taskId,
      title,
      description,
      type
    }
    await handleUpdateTask(taskData);
    setIsUpdateModal(null);
  };

  return (
    <div className="task-modal-container">
      <div className="task-modal-wrapper">
        <div className="task-modal-header">
          <h4>Update Task</h4>
          <FaTimes
            onClick={() => setIsUpdateModal(null)}
            size={20}
            title="Cancel operation"
            style={{ cursor: "pointer" }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="task-info-div">
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder={title || "Enter your new title"}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="task-info-div">
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              type="text"
              placeholder={description || "Enter your new description"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="task-info-div">
            <label htmlFor="type">Type: </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="" disabled>
                {type || "Select new type"}
              </option>
              <option value="farming">Farming</option>
              <option value="content">Content</option>
              <option value="design">Design</option>
            </select>
          </div>
          <button type="submit">Update Task</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
