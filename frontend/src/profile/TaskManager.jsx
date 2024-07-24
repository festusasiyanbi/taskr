import React, { useContext, useState } from "react";
import "../styles/profile.css";
import "../index.css";
import Tasks from "./Tasks";
import { PiMagnifyingGlassBold } from "react-icons/pi";

const TaskManager = ({ setIsModal }) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

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
          <button className="add-task" onClick={() => setIsModal(true)}>+ Add task</button>
        </div>
      </div>
      <Tasks />
    </div>
  );
};

export default TaskManager;
