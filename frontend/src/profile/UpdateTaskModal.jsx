import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import TaskContext from "../context/TaskProvider";

const UpdateTaskModal = ({ isUpdateModal, setIsUpdateModal }) => {
  const {
    handleUpdateTask,
    title,
    setTitle,
    type,
    setType,
    description,
    setDescription,
    setTaskToUpdate,
  } = useContext(TaskContext);
  console.log(isUpdateModal);
  useEffect(() => {
    if (isUpdateModal) {
      setTaskToUpdate(isUpdateModal);
    }
  }, [isUpdateModal, setTaskToUpdate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTask();
    setIsUpdateModal(false);
  };
  return (
    <div className="task-modal-container">
      <div className="task-modal-wrapper">
        <div className="task-modal-header">
          <h4>Update Task</h4>
          <FaTimes
            onClick={() => setIsUpdateModal("")}
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
              placeholder={title}
              //   value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="task-info-div">
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              type="text"
              //   placeholder={taskToUpdate.description?.slice(0, 50) + "..."}
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
                {/* {taskToUpdate.type} */}
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
