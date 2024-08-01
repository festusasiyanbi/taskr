import React, { useState } from "react";
import Layout from "../components/Layout";
import NavBar from "./NavBar";
import "../styles/global.css";
import "../index.css";
import TaskManager from "./TaskManager";
import CreateTaskModal from "./CreateTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";

const UserProfile = () => {
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState("");

  return (
    <Layout>
      {isCreateModal ? (
        <CreateTaskModal setIsCreateModal={setIsCreateModal} />
      ) : isUpdateModal !== "" ? (
        <UpdateTaskModal
          isUpdateModal={isUpdateModal}
          setIsUpdateModal={setIsUpdateModal}
        />
      ) : (
        <main className="task-wrapper">
          <NavBar />
          <TaskManager
            setIsCreateModal={setIsCreateModal}
            setIsUpdateModal={setIsUpdateModal}
          />
        </main>
      )}
    </Layout>
  );
};

export default UserProfile;
