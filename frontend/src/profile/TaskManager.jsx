import React from "react";
import "../styles/profile.css";
import Container from "react-bootstrap/esm/Container";
import Tasks from "./Tasks";
import { FaMagnifyingGlass } from "react-icons/bi";
const TaskManager = () => {
  return (
    <Container className="task-manager">
      <div className="task-top-stack">
        <h4>Tasks</h4>
        <input type="text" placeholder="search task" />
        <button className="searchBtn">
          <FaMagnifyingGlass />
        </button>
        <button className="add-task">+ Add task</button>
      </div>
      <Tasks />
    </Container>
  );
};

export default TaskManager;
