import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import NavBar from "./NavBar";
import "../styles/global.css";
import "../index.css";
import TaskManager from "./TaskManager";
import TaskModal from "./TaskModal";

const UserProfile = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <Layout>
      {isModal ? <TaskModal setIsModal={setIsModal}/> :
        <main className="task-wrapper">
          <NavBar />
          <TaskManager setIsModal={setIsModal} />
        </main>}
    </Layout>
  );
};

export default UserProfile;
