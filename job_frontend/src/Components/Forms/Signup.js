import React,{useReducer} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Signupimage from "../../assests/images/signup.svg";
import { signupReducer,initialSignup } from "../../Reducers/SignupReducer";
import {validateEmail,createUser} from "../../network/agent";
import { useGlobalContext } from "../../context";




const Signup = () => {
  const [state,dispatch] = useReducer(signupReducer,initialSignup);
  const { toggleSpin, setMessage } = useGlobalContext();
  const navigate = useNavigate();

  const valueChangeHandler = (e) => {
    dispatch({
      type: "ON_CHANGE",
      data: { key: e.target.name, value: e.target.value },
    });
  };

  const onFocusHandler = (e) => {
    dispatch({ type: "INPUT_TOUCHED", data: e.target.name });
  };

  const onBlurHandler = (e) => {
    dispatch({
      type: "INPUT_BLUR",
      data: { key: e.target.name, value: e.target.value },
    });
    if (e.target.name === "email") {
      // we need to verfify the email address with the backend whether it already exists or not
      validateEmail({ email: state.email.value }).then((data) => {
        dispatch({
          type: "VALID_DATA",
          data: { key: "email", error: data.error, value: data.message },
        });
      });
    }
  };

  const userTypeHandler = (e) => {
    dispatch({ type: "USER_TYPE", data: e.target.value });
  };

  const createAccountHandler = (e) => {
    e.preventDefault();
    if (state.email.hasError || state.password.hasError || state.formValid === false) {
      return;
    }
    toggleSpin();

    createUser({
      email: state.email.value,
      password: state.password.value,
      usertype: state.usertype,
    }).then((response) => {
      if (response.error === false) {
        toggleSpin();
        dispatch({ type: "CLEAR" });
        setMessage(true, "success", response.message, "Redirecting to Login page !");
        setTimeout(() => {
          navigate("/auth/login");
        },2000);
        
      }
    });

    // toggleSpin();
  };
  
  return (
    <Container>
      <Row className="shadow-lg py-2 mb-3 mt-md-5 mt-2 border rounded justify-content-evenly">
        <Col md={5} xs={12}>
          <h3 className="fw-bold mt-md-5 my-3 mb-md-5 text-center text">
            <u>Sign up Form</u>
          </h3>
          <Form className="mt-3" onSubmit={createAccountHandler}>
            <Form.Group className="my-3 my-md-4 ">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="user@gmail.com"
                name="email"
                value={state.email.value}
                onChange={valueChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
              />
              {state.email.touched && state.email.hasError && (
            <Form.Text className="text-danger">{state.email.error}</Form.Text>
          )}
            </Form.Group>
            <Form.Group className="my-3 my-md-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="user1234"
                name="password"
                value={state.password.value}
                onChange={valueChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
              />
              {state.password.touched && state.password.hasError && (
            <Form.Text className="text-danger">
              {state.password.error}
            </Form.Text>
          )}
            </Form.Group>

            <Form.Group className="my-3 my-md-4">
              <h5 className="d-block">Type of Account</h5>
              <span className="d-flex justify-content-around">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="user"
                    id="user"
                    value="1"
                    checked={state.usertype === 1}
                    onChange={userTypeHandler}
                  />
                  <label className="form-check-label">User</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="organization"
                    id="organization"
                    value="2"
                    checked={state.usertype === 2}
                    onChange={userTypeHandler}
                  />
                  <label className="form-check-label">Organization</label>
                </div>
              </span>
            </Form.Group>
            <Button variant="success" type="submit">
              Create Account
            </Button>
          </Form>
        </Col>
        <Col
          md={{ span: 4, order: "last" }}
          xs={{ span: 6, order: "first" }}
        >

    <img src={Signupimage} className="img-fluid my-3 my-md-5" />

        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
