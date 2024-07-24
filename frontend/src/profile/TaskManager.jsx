import React, { useState } from "react";
import "../styles/profile.css";
import "../index.css";
import Tasks from "./Tasks";
import { PiMagnifyingGlassBold } from "react-icons/pi";

const TaskManager = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([
    {
      _id: 1,
      title: "High priority mobile app design",
      description:
        "High priority mobile app design, High priority mobile app design, High priority mobile app design, High priority mobile app design",
      status: "not started",
      type: "design",
    },
    {
      _id: 2,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "completed",
      type: "design",
    },
    {
      _id: 3,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "not started",
      type: "design",
    },
    {
      _id: 4,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "in progress",
      type: "content",
    },
    {
      _id: 5,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "completed",
      type: "design",
    },
    {
      _id: 6,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "in progress",
      type: "farming",
    },
    {
      _id: 7,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "not started",
      type: "design",
    },
    {
      _id: 8,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "in progress",
      type: "design",
    },
    {
      _id: 9,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "not started",
      type: "content",
    },
    {
      _id: 10,
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "in progress",
      type: "farming",
    },
  ]);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="task-manager">
      <div className="task-top-stack">
        <h4>Tasks</h4>
        <div className="operation-wrapper">
          {toggle && (
            <input
              type="text"
              placeholder="Search task"
              value={search}
              onChange={handleSearchChange}
            />
          )}
          <button
            className="searchBtn"
            onClick={handleToggle}
            style={{
              backgroundColor: toggle && "#6200ea",
              color: toggle && "white",
            }}
          >
            <PiMagnifyingGlassBold />
          </button>
          <button className="add-task">+ Add task</button>
        </div>
      </div>
      <Tasks tasks={searchedTasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskManager;
