import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { signupimage } from "../../data";
import { useGlobalContext } from "../../context";

const Auth = ({ children }) => {
  const {isloggedin} =useGlobalContext();

  if(isloggedin) {
    return <Navigate to="/" replace/>
  }
  return (
    <Col md={10} className="mt-5">
      <Card>
        <Card.Body>
          <Row className="justify-content-evenly p-5">
            <Col md={6} xs={12}>
              {children}
            </Col>
            <Col
              md={{ span: 5, order: "last" }}
              xs={{ span: 12, order: "first" }}
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
