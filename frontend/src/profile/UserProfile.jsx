import React from "react";
import Layout from "../component/Layout";
import NavBar from "./NavBar";
import Tasks from "./TaskManager";
import "../styles/global.css";
const UserProfile = () => {
  return (
    <Layout>
      <main className="task-wrapper">
        <NavBar />
        <Tasks />
      </main>
    </Layout>
  );
};

export default UserProfile;
