import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import { gender, profilepic } from "../../data";
import { updateUserProfile } from "../../network/agent";

const MainProfileModal = ({ show, onHide, profile,updateProfileHandler }) => {
  const [data, setData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    headline: profile.headline,
    gender: profile.gender,
  });

  const [error, setError] = useState(false);
  useEffect(() => {
    setData({
      ...data,
      firstName: profile.firstName,
      lastName: profile.lastName,
      headline: profile.headline,
      gender: profile.gender,
    });

    
  }, [profile]);

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onFormSubmit = () => {
    if (!data.firstName || !data.lastName || !data.headline || !data.gender) {
      setError(true);
      return;
    }

    updateUserProfile(JSON.stringify(data)).then(response => {
        setData({});
        updateProfileHandler(response.data);
    });

  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header className="text-center" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Main Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="justify-content-evenly">
            <Col md={5}>
              <Form.Group className="mb-3">
                <Form.Label>
                  First Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="Enter FirstName"
                  value={data.firstName}
                  onChange={onChangeHandler}
                />
                {!data.firstName && error && (
                  <Form.Text className="text-danger">
                    Fields cannot be empty
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Last Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Enter LastName"
                  value={data.lastName}
                  onChange={onChangeHandler}
                />
                {!data.lastName && error && (
                  <Form.Text className="text-danger">
                    Fields cannot be empty
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Gender <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="gender"
                  onChange={onChangeHandler}
                  value={data.gender}
                >
                  {gender.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={5}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Headline<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="headline"
                  row={2}
                  placeholder="About yourself"
                  value={data.headline}
                  onChange={onChangeHandler}
                />
                {!data.headline && error && (
                  <Form.Text className="text-danger">
                    Fields cannot be empty
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            {/* <Col md={10}>
              <Row className="justify-content-evenly">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Profile Pic</Form.Label>
                    <Form.Control type="file" name="profilePic" accept="image/png, image/gif, image/jpeg"/>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <img src={profilepic} className="img-fluid" width={60} />
                  <button className="btn btn-sm btn-warning mx-5">
                    remove
                  </button>
                </Col>
              </Row>
            </Col> */}

            {/* Resume */}
            {/* <Col md={10}>
              <Form.Group className="mb-3">
                <Form.Label>Resume</Form.Label>
                <Form.Control type="file" name="resume" accept="application/pdf" />
              </Form.Group>
            </Col> */}
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button variant="success" type="submit" onClick={onFormSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MainProfileModal;
