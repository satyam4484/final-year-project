import React from "react";
import { Form, Button, Row, Container, Col, Card } from "react-bootstrap";
import { signupimage } from "../../data";

const Signup = () => {
  return (
    <div>
      <h3 className="fw-bold my-2 mb-md-5 text-center text">
        <u>Sign up Form</u>
      </h3>
      <Form className="mt-3">
        <Form.Group className="my-3 my-md-4 ">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="user@gmail.com" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3 my-md-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="user1234" />
        </Form.Group>
        <Form.Group className="my-3 my-md-4">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="user1234" />
        </Form.Group>
        <Form.Group className="my-3 my-md-4">
          <h5 className="d-block">Type of Account</h5>
          <span className="d-flex justify-content-around">
            <Form.Check
              type="radio"
              name="usertype"
              id="user"
              label="normal user"
              checked
            />
            <Form.Check
              type="radio"
              name="usertype"
              id="organization"
              label="organization"
            />
          </span>
        </Form.Group>
        <Button variant="warning">Create Account</Button>
      </Form>
    </div>
  );
};

export default Signup;
