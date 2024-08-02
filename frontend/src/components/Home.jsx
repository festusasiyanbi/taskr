import React from "react";
import "../styles/home.css";
import "../index.css"


const Home = () => {

  return (
    <div className="home">
      <div className="home-container">
        <div className="align-items-center" style={{ minHeight: "80vh" }}>
          <div>
            <h1 className="text-white" style={{ fontSize: '120px' }}>Welcome.</h1>
            <p className="text-white" style={{ fontSize: '17px' }}>
              Simplify your workflow and boost your productivity. Start managing your tasks efficiently with our intuitive task management app. Try it now!
            </p>
            <div className="search-box mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <button className="searchBtn"> Search </button>
            </div>
            <div className="mt-3">
              <button
                className="freeTrialBtn"
              >
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
