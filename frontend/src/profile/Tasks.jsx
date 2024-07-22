import React, { useState } from "react";
import "../index.css";

const Tasks = ({ tasks, setTasks }) => {
  const [status, setStatus] = useState("not started");

  const statuses = [
    { type: "all" },
    { type: "not started" },
    { type: "in progress" },
    { type: "completed" },
  ];

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
    if (status === "all") {
      return tasks;
    } else {
      return tasks.filter((task) => task.status === status);
    }
  };

  const handleStartTask = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, status: "in progress" } : task
    );
    setTasks(updatedTask);
  };
  const handleCompleteTask = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, status: "completed" } : task
    );
    setTasks(updatedTask);
  };
  const handleRepeatTask = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, status: "not started" } : task
    );
    setTasks(updatedTask);
  };
  return (
    <div className="tasks">
      <div className="status-wrapper">
        {statuses.map((statusObject) => (
          <div className="status-div">
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
        {filterTasks().length > 0 ? (
          filterTasks().map((task) => (
            <div className="task-card">
              <div style={{ display: "flex", columnGap: 10 }}>
                <span
                  className="task-type"
                  style={{ backgroundColor: getColorForTaskType(task.type) }}
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
              <p className="task-title">{task.title}</p>
              <p className="task-description">{task.description}</p>
              {task.status === "not started" ? (
                <button onClick={() => handleStartTask(task.id)}>
                  Start Task
                </button>
              ) : task.status === "in progress" ? (
                <button onClick={() => handleCompleteTask(task.id)}>
                  Mark As Complete
                </button>
              ) : (
                <button onClick={() => handleRepeatTask(task.id)}>
                  Repeat Task
                </button>
              )}
            </div>
          ))
        ) : (
          <p style={{ color: "red", textAlign: "center", width: "100%" }}>
            No task found!
          </p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
