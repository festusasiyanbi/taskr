import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="align-items-center" style={{ minHeight: "80vh" }}>
          <Col md={3}>
            <h1 className="display-9 text-white">Welcome.</h1>
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <Button variant="primary">Search</Button>
            </div>
            <div className="mt-3">
              <Button variant="primary" className="mr-2">
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
