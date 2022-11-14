import React from "react";
import { useGlobalContext } from "../context";
import { Col, Row, Card, CardGroup } from "react-bootstrap";
import Experience from "./UserProfile/Experience/Experience";
import Project from "./UserProfile/Projects/Project";

import Website from "./UserProfile/Websites/Website";


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

      <Website/>



      

      {/* experience */}
      {/* <Experience/> */}

      {/* projects */}
      {/* <Project/> */}
    </Col>
  );
};

export default Profile;
