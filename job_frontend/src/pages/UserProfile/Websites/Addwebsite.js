import { useReducer, useState } from "react";
import { Modal, Form, Col, Row, Button } from "react-bootstrap";

const initialwebsite = {
  name: "",
  link: "",
  description: "",
  error: "",
};

const Addwebsite = ({ show, onHide, addWebsite }) => {
    
  const [website, setWebite] = useState(initialwebsite);

  const onChangeHandler = (e) => {
    setWebite((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (
      website.name.trim().length === 0 ||
      website.link.trim().length ===0 ||
      website.description.trim().length === 0
    ) {
      setWebite((state) => {
        return { ...state, error: "Fields cannont be empty" };
      });
      return;
    }

    // if the form is valid then make an api call to the backend

    const data = {
      name: website.name,
      link: website.link,
      description: website.description,
    };
    setWebite(initialwebsite);
    onHide();
    addWebsite(data);
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        setWebite(initialwebsite);
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
                {website.name.trim().length === 0 && website.error && (
                  <Form.Text className="text-warning">
                    {website.error}
                  </Form.Text>
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
                {website.link.trim().length === 0 && website.error && (
                  <Form.Text className="text-warning">
                    {website.error}
                  </Form.Text>
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
                {website.description.trim().length === 0 && website.error && (
                  <Form.Text className="text-warning">
                    {website.error}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col xs={5}>
              <Button type="submit">Add</Button>
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

export default Addwebsite;
