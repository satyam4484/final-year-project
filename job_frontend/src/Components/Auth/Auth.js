import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { signupimage } from "../../data";

const Auth = ({ children }) => {
  return (
    <Col md={10} className="mt-5">
      <Card>
        <Card.Body>
          <Row className="justify-content-evenly p-5">
            <Col md={6} sm={12}>
              {children}
            </Col>
            <Col
              md={{ span: 5, order: "last" }}
              xs={{ span: 5, order: "first" }}
            >
              <img src={signupimage} className="img-fluid my-3 my-md-5" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Auth;
