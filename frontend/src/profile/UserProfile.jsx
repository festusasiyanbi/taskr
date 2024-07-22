import React from "react";
import Layout from "../components/Layout";
import NavBar from "./NavBar";
import "../styles/global.css";
import "../index.css";
import TaskManager from "./TaskManager";
const UserProfile = () => {
  return (
    <Layout>
      <main className="task-wrapper">
        <NavBar />
        <TaskManager />
      </main>
    </Layout>
  );
};

export default UserProfile;
