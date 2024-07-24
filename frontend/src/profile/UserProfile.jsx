import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import NavBar from "./NavBar";
import "../styles/global.css";
import "../index.css";
import TaskManager from "./TaskManager";
import AuthContext from "../context/AuthProvider";

const UserProfile = () => {
  const { user, loading, error } = useContext(AuthContext);

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
