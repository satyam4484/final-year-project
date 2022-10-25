import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signupReducer, initialFormState } from "../../Reducer/signupReducer";
import { validateEmail } from "../../network/agent";
import { useGlobalContext } from "../../context";
import { createUser } from "../../network/agent";

const Signup = () => {
  const [state, dispatch] = useReducer(signupReducer, initialFormState);
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
    if (state.email.hasError || state.password.hasError) {
      return;
    }
    toggleSpin();

    createUser({
      email: state.email.value,
      password: state.password.value,
      usertype: state.usertype,
    }).then((response) => {
      if (response.error === false) {
        dispatch({ type: "CLEAR" });
        setMessage(true, "success", response.message, "You can Login Now !!");
        setTimeout(() => {
          toggleSpin();
          navigate("/login");
        },2000);
        
      }
    });

    // toggleSpin();
  };
  return (
    <div>
      <h3 className="fw-bold my-2 mb-md-5 text-center text">
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
            <Form.Text className="text-warning">{state.email.error}</Form.Text>
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
            <Form.Text className="text-warning">
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
              <label className="form-check-label" for="flexRadioDefault1">
                User
              </label>
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
              <label className="form-check-label" for="flexRadioDefault1">
                Organization
              </label>
            </div>
          </span>
        </Form.Group>
        <Button variant="warning" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
