import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import "../index.css";
import TaskManager from "./TaskManager";
import CreateTaskModal from "./CreateTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";

const UserProfile = () => {
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(null);

  return (
    <Layout>
      {isCreateModal ? (
        <CreateTaskModal setIsCreateModal={setIsCreateModal} />
      ) : isUpdateModal !== null ? (
        <UpdateTaskModal
          isUpdateModal={isUpdateModal}
          setIsUpdateModal={setIsUpdateModal}
        />
      ) : (
        <main className="task-wrapper">
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
