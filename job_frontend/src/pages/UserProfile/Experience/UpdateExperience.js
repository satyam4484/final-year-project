import React from 'react'
import {Modal,Form,Row,Col} from "react-bootstrap";

const UpdateExperience = ({show,onHide}) => {
  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="justify-content-evenly">
              <Col xs={5} className="my-3">
                <Form.Group className="mb-3">
                  <Form.Label>Role </Form.Label>
                  <Form.Control
                    name="role"
                    type="text"
                    placeholder="Enter Your Role"
                  />
                </Form.Group>
              </Col>

              <Col xs={5} className="my-3">
                <Form.Group className="mb-3">
                  <Form.Label>Organization</Form.Label>
                  <Form.Control
                    name="companyName"
                    type="text"
                    placeholder="Organization name"
                  />
                </Form.Group>
              </Col>

              <Col xs={5} className="my-3">
                <Form.Group className="mb-3">
                  <Form.Label>Employement Type</Form.Label>
                  <Form.Control
                    name="employementType"
                    type="text"
                    placeholder="full time or internship"
                  />
                </Form.Group>
              </Col>

              <Col xs={5} className="my-3">
                <Form.Group className="mb-3">
                  <Form.Label>location</Form.Label>
                  <Form.Control
                    name="location"
                    type="text"
                    placeholder="Organization location"
                  />
                </Form.Group>
              </Col>
              <Col xs={8} className="my-3">
                <Form.Group className="mb-3">
                  <Form.Label>Desciption</Form.Label>
                  <Form.Control
                    name="location"
                    as="textarea"
                    rows={3}
                    placeholder="for bullet points add comma separated"
                  />
                </Form.Group>
              </Col>
              <Col xs={8} className="my-3">
                <Form.Group className="mb-3">
                  <Form.Label>Start Date</Form.Label>
                  <input type="date" className="form-control bg-secondary text-white" name="startdate"/>
                </Form.Group>
              </Col>
              <Col xs={8} className="my-3">
              <Form.Group className="mb-3">
                  <Form.Label>End Date</Form.Label>
                  <input type="date" className="form-control bg-secondary text-white" name="enddate"/>
                </Form.Group>
              </Col>

            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
  )
}

export default UpdateExperience