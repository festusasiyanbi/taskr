import React, { useContext, useState } from "react";
import "../index.css";
import TaskContext from "../context/TaskProvider";
import { FaEdit } from "react-icons/fa";

const Tasks = ({ tasks, setIsUpdateModal }) => {
  const [status, setStatus] = useState("not started");
  const {
    loading,
    error,
    handleStartTask,
    handleCompleteTask,
    handleRepeatTask,
    handleDeleteTask,
    setTaskToUpdate,
  } = useContext(TaskContext);
  const statuses = [
    { _id: 1, type: "all" },
    { _id: 2, type: "not started" },
    { _id: 3, type: "in progress" },
    { _id: 4, type: "completed" },
  ];

  if (!tasks.length) {
    return (
      <div style={{ width: "100%", alignItems: "center", justifyContent: "center"}}>
        <p style={{ textAlign: "center", color: "red"}}>No tasks found</p>
      </div>
    );
  }
  const getColorForTaskType = (type) => {
    const typeColors = {
      design: "#FFBF00",
      content: "#850F8D",
      farming: "#C738BD",
      planning: "#D10363",
      research: "#2A629A",
    };

    return typeColors[type] || "#6200ea";
  };
  const getColorForTaskStatus = (status) => {
    const statusColors = {
      all: "blue",
      "not started": "red",
      "in progress": "orange",
      completed: "#6200ea",
    };

    return statusColors[status] || "gray";
  };
  const fetchTaskStatus = (status) => {
    setStatus(status);
  };

  const filterTasks = () => {
    if (tasks.length !== 0) {
      if (status === "all") {
        return tasks;
      } else {
        return tasks.filter((task) => task.status === status);
      }
    } else {
      return;
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleUpdateTask = (id) => {
    const taskToUpdate = tasks.find((task) => task._id === id);
    setIsUpdateModal(taskToUpdate);
  };
  return (
    <>
      <div className="tasks">
        <div className="status-wrapper">
          {statuses.map((statusObject) => (
            <div className="status-div" key={statusObject._id}>
              <button
                className="status-type"
                style={{
                  color:
                    status === statusObject.type
                      ? getColorForTaskStatus(statusObject.type)
                      : "",
                }}
                onClick={() => fetchTaskStatus(statusObject.type)}
              >
                {statusObject.type}
              </button>
              <div
                style={{
                  backgroundColor:
                    status === statusObject.type
                      ? getColorForTaskStatus(statusObject.type)
                      : "",
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="task-container">
          {filterTasks().map((task) => (
            <div className="task-card" key={task._id}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  height: 20,
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "50%", display: "flex", columnGap: 10 }}>
                  <span
                    className="task-type"
                    style={{
                      backgroundColor: getColorForTaskType(task.type),
                    }}
                  >
                    {task.type}
                  </span>
                  <span
                    className="task-type"
                    style={{
                      backgroundColor: getColorForTaskStatus(task.status),
                    }}
                  >
                    {task.status}
                  </span>
                </div>
                <div className="edit-task">
                  <FaEdit
                    title="Edit task"
                    onClick={() => handleUpdateTask(task._id)}
                  />
                </div>
              </div>
              <p className="task-title">{task.title}</p>
              <p className="task-description">{task.description}</p>
              <div style={{ width: "100%", display: "flex", columnGap: 10 }}>
                {task.status === "not started" ? (
                  <button onClick={() => handleStartTask(task._id)}>
                    Start Task
                  </button>
                ) : task.status === "in progress" ? (
                  <button onClick={() => handleCompleteTask(task._id)}>
                    Complete Task
                  </button>
                ) : (
                  <button onClick={() => handleRepeatTask(task._id)}>
                    Repeat Task
                  </button>
                )}
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => handleDeleteTask(task._id)}
                >
                  Delete Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
