import React from "react";
import "./App.css";

import { Container, Row, Col, Card } from "react-bootstrap";
import { EmployeeTable } from "./components";

import seed from "./seed.json";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Employee Register</Card.Header>
            <Card.Body>
              <EmployeeTable employees={seed} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
