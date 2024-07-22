import React, { useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "../styles/home.css";
import "../index.css"

const Home = () => {
  
  return (
    <div className="home">
      <Container>
        <Row className="align-items-center" style={{ minHeight: "80vh" }}>
          <Col md={6}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
