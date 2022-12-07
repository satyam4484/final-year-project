import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { getToken, getUser, getUserProfile } from "../../network/agent";
import { useGlobalContext } from "../../context";
import Signupimage from "../../assests/images/signup.svg";

const intialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(intialState);
  const { setMessage, toggleSpin, userLogin, setUserProfile } =
    useGlobalContext();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const loginFormHandler = (e) => {
    e.preventDefault();

    if (data.email.trim().length == 0 || data.password.trim().length == 0) {
      setMessage(
        true,
        "danger",
        "Empty From Fields",
        "Form Values cannot be empty"
      );
      return;
    }

    toggleSpin();

    // call the api to get token
    getToken({ email: data.email, password: data.password })
      .then((response) => {
        if (response.data) {
          // got the token now login the user
          localStorage.setItem("token", response.data.access);

          // get the user values
          getUser().then((response) => {
            if (response.error === false) {
              localStorage.setItem("user", JSON.stringify(response.data));
              userLogin(response.data);
              getUserProfile().then((response) =>
                setUserProfile(response.data)
              );
              navigate("/");
            } else {
            }
          });
        }
      })
      .catch((error) => {
        setMessage(
          true,
          "danger",
          "Invalid Credentials",
          error.response.data.detail
        );
      });

    toggleSpin();
  };

  return (
    <Container>
      <Row className="shadow-lg py-2 mb-3 mt-md-5 mt-2 border rounded justify-content-evenly">
        <Col md={5} xs={12}>
          <h3 className="fw-bold my-2 mb-md-5 text-center text">
            <u>Login Form</u>
          </h3>
          <Form className="mt-3" onSubmit={loginFormHandler}>
            <Form.Group className="my-3 my-md-4 ">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="user@gmail.com"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="my-3 my-md-4 ">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="user12345"
                name="password"
                value={data.password}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Login
            </Button>
            <NavLink to="/signup" className="btn btn-info ms-1 mx-md-3 my-2">
              signup
            </NavLink>
          </Form>
        </Col>
        <Col md={{ span: 4, order: "last" }} xs={{ span: 6, order: "first" }}>
          <img src={Signupimage} className="img-fluid my-3 my-md-5" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
