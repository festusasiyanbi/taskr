import React, { useContext, useState } from "react";
import "../index.css";
import TaskContext from "../context/TaskProvider";

const Tasks = () => {
  const [status, setStatus] = useState("not started");
  const { tasks, setTasks, loading, error } = useContext(TaskContext);
  const statuses = [
    { _id: 1, type: "all" },
    { _id: 2, type: "not started" },
    { _id: 3, type: "in progress" },
    { _id: 4, type: "completed" },
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
    if(tasks.length !== 0) {
      if (status === "all") {
        return tasks;
      } else {
        return tasks.filter((task) => task.status === status);
      }
    } else {
      return;
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

  if (loading) {
    return (
      <div>Loading ...</div>
    );
  }

  if (error) {
    return (<div>Error: {error}</div>)
  }
  console.log(tasks);
  return (
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
        {filterTasks().length > 0 ? (
          filterTasks().map((task) => (
            <div className="task-card" key={task._id}>
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
              <div style={{width: '100%', display: "flex", columnGap: 10,}}>
              {task.status === "not started" ? (
                <button onClick={() => handleStartTask(task.id)}>
                  Start Task
                </button>
              ) : task.status === "in progress" ? (
                <button onClick={() => handleCompleteTask(task.id)}>
                  Complete Task
                </button>
              ) : (
                <button onClick={() => handleRepeatTask(task.id)}>
                  Repeat Task
                </button>
              )}
              <button style={{ backgroundColor: 'red'}}>Delete Task</button>
              </div>
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
