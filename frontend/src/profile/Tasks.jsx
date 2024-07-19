import React from "react";

const Tasks = () => {
  const tasks = [
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "not started",
      type: "design",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "completed",
      type: "design",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "not started",
      type: "design",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "in progress",
      type: "content",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "completed",
      type: "design",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "in progress",
      type: "farming",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "not started",
      type: "design",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "in progress",
      type: "design",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "not started",
      type: "content",
    },
    {
      title: "High priority mobile app design",
      description: "High priority mobile app design",
      status: "in progress",
      type: "farming",
    },
  ];
  const status = [
    { type: "Not Started", color: "red" },
    { type: "In Progress", color: "orange" },
    { type: "Completed", color: "#6200ea" },
  ];
  return (
    <div className="tasks">
      <div className="status-wrapper">
        {status.map((status) => (
          <div className="status-div">
            <span>{status.type}</span>
            <div style={{ backgroundColor: status.color }}></div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Tasks;
