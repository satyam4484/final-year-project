import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";


const EditWebsite = ({ show, onHide, value,setValue }) => {
    
  const [website, setWebsite] = useState(value);

  const [error, setError] = useState("");


  const submitFormHandler = (e) => {
    e.preventDefault();

    if (
      website.name.trim().length === 0 ||
      website.link.trim().length === 0 ||
      website.description.trim().length === 0
    ) {
      setError("Fields cannot be empty");
      return;
    }
    onHide();
    setValue(website);
    

  };

  const onChangeHandler = (e) => {
    setWebsite((state) => {
        return {...state,[e.target.name]:e.target.value}
    })
  };
  return (
    <Modal
      show={show}
      onHide={() => {
        onHide();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Websites</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitFormHandler}>
          <Row className="justify-content-evenly">
            <Col xs={5} className="my-3">
              <Form.Group className="mb-3">
                <Form.Label>
                  Name <span className="text-warning">*</span>
                </Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter website name"
                  value={website.name}
                  onChange={onChangeHandler}
                />
                {website.name.trim().length === 0 && error && (
                  <Form.Text className="text-warning">{error}</Form.Text>
                )}
              </Form.Group>
            </Col>

            <Col xs={5} className="my-3">
              <Form.Group className="mb-3">
                <Form.Label>
                  link <span className="text-warning">*</span>
                </Form.Label>
                <Form.Control
                  name="link"
                  type="name"
                  placeholder="website link"
                  value={website.link}
                  onChange={onChangeHandler}
                />
                {website.link.trim().length === 0 && error && (
                  <Form.Text className="text-warning">{error}</Form.Text>
                )}
              </Form.Group>
            </Col>

            <Col xs={12} sm={8} className="my-3">
              <Form.Group className="mb-3">
                <Form.Label>
                  Desciption <span className="text-warning">*</span>
                </Form.Label>
                <textarea
                  name="description"
                  className="form-control"
                  value={website.description}
                  onChange={onChangeHandler}
                  cols="30"
                  rows="5"
                />
                {website.description.trim().length === 0 && error && (
                  <Form.Text className="text-warning">{error}</Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col xs={5}>
              <Button type="submit" variant="warning">
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default EditWebsite;
