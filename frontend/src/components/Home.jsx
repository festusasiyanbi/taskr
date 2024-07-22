import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.css";

const Home = () => {
  const [hovered, setHovered] = useState({ search: false, trial: false });

  const handleMouseEnter = (button) => {
    setHovered({ ...hovered, [button]: true });
  };

  const handleMouseLeave = (button) => {
    setHovered({ ...hovered, [button]: false });
  };

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
              <div style={{ marginTop: '10px' }}>
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: hovered.search ? "white" : "#007bff",
                    color: hovered.search ? "black" : "white",
                    transition: "0.5s",
                  }}
                  onMouseEnter={() => handleMouseEnter("search")}
                  onMouseLeave={() => handleMouseLeave("search")}
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="mt-3">
              <Button
                variant="primary"
                className="mr-2"
                style={{
                  backgroundColor: hovered.trial ? "white" : "#007bff",
                  color: hovered.trial ? "black" : "white",
                  transition: "0.3s",
                }}
                onMouseEnter={() => handleMouseEnter("trial")}
                onMouseLeave={() => handleMouseLeave("trial")}
              >
                Free Trial
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
