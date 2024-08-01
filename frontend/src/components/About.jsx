import React from "react";
import Layout from "./Layout";
import "../styles/about.css";

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1>About Our Task Management App</h1>
        <p>
          Welcome to our Task Management App! We created this tool to help you streamline and organize 
          your daily tasks with ease and efficiency. Our team understands the challenges of managing 
          multiple tasks and projects, and we developed this app to provide a solution that meets those needs.
        </p>
        <p>
          Our app offers a range of features designed to enhance your productivity and keep you on track. 
          With capabilities such as task creation, deadline setting, progress tracking, and team collaboration, 
          you can manage your workload more effectively and achieve your goals with greater ease.
        </p>
        <p>
          By using our Task Management App, you will benefit from a user-friendly interface, customizable 
          task lists, and real-time updates. Whether you are working solo or as part of a team, our app 
          provides the tools you need to stay organized and efficient. We are committed to continuous 
          improvement and regularly update our features to ensure you have the best experience possible.
        </p>
      </div>
    </Layout>
  );
};

export default About;
