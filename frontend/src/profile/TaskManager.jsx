import React, { useContext, useState } from "react";
import "../styles/profile.css";
import "../index.css";
import Tasks from "./Tasks";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import TaskContext from "../context/TaskProvider";

const TaskManager = ({ setIsCreateModal, setIsUpdateModal }) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const { tasks } = useContext(TaskContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredTasks = tasks.filter((task) =>
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
          <button className="add-task" onClick={() => setIsCreateModal(true)}>
            + Add task
          </button>
        </div>
      </div>
      <Tasks tasks={filteredTasks} setIsUpdateModal={setIsUpdateModal} />
    </div>
  );
};

export default TaskManager;
