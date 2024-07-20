import React, { useState } from "react";
import "../styles/profile.css";
import Container from "react-bootstrap/esm/Container";
import Tasks from "./Tasks";
import { PiMagnifyingGlassBold } from "react-icons/pi";
const TaskManager = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container className="task-manager">
      <div className="task-top-stack">
        <h4>Tasks</h4>
        <div className="operation-wrapper">
          {toggle && <input type="text" placeholder="Search task" />}
          <button className="searchBtn" onClick={handleToggle}>
            <PiMagnifyingGlassBold />
          </button>
          <button className="add-task">+ Add task</button>
        </div>
      </div>
      <Tasks />
    </Container>
  );
};

export default TaskManager;
