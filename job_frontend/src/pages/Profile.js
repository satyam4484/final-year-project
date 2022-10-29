import React from "react";
import { useGlobalContext } from "../context";
import { Col, Row, Card, CardGroup } from "react-bootstrap";
import Experience from "./UserProfile/Experience/Experience";
import Project from "./UserProfile/Projects/Project";

const Profile = () => {
  const { profile } = useGlobalContext();

  return (
    <Col xs={10}>
      {/* main page card */}
      <Card style={{ postion: "relative" }} className="my-3">
        <div className="img_container">
          <Card.Img variant="top" src={profile.profile?.coverImage} />
        </div>
        <button className="edit-btn btn btn-success btn-sm">edit</button>
        <Card.Body>
          <Row className="justify-content-evenly">
            <Col xs={3} sm={4}>
              <img
                src={profile.profile?.profilePic}
                className="img-fluid rounded w-50"
              />
              <button className="btn btn-sm btn-warning d-block my-1">
                edit
              </button>
            </Col>

            <Col xs={7} sm={8}>
              <h3>
                {profile.firstName} {profile.lastName}{" "}
                <button className="btn btn-sm float-end">Edit Name</button>
              </h3>
              <hr />
              <h5>
                {profile.profile?.headline}{" "}
                <button className="btn btn-sm float-end">Edit headline</button>
              </h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* websites */}
      <Card className="my-3">
        <Card.Header>
          <h3 className="d-inline">Websites</h3>
          <button className="float-end btn btn-sm mx-2">Edit</button>
          <button className="float-end btn btn-sm mx-2">add</button>
        </Card.Header>

        <Card.Body>
          <div class="sites" style={{ width: "100%",height:"300px", overflow: "auto" }}>
            {profile.profile?.websites.map((website, index) => (
              <Card style={{ width: "18rem" }} className="d-inline-block m-3 bordered shadow-lg">

                <Card.Body>
                  <Card.Title>{website.name}</Card.Title>
                  <Card.Text>{website.link}</Card.Text>
                 
                </Card.Body>
              </Card>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* experience */}
      <Experience/>

      {/* projects */}
      <Project/>
    </Col>
  );
};

export default Profile;
