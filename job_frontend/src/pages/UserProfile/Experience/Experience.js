import React, { useState, useEffect } from "react";
import { Col, Row, Card, Modal, Form, FloatingLabel } from "react-bootstrap";
import { getExperience } from "../../../network/agent";
import ExperienceCard from "./ExperienceCard";
import AddExperience from "./AddExperience";
import UpdateExperience from "./UpdateExperience";

const initialExperience = {
  role: "",
  companyName: "",
  employementType: "",
  location: "",
  startdate: "",
  enddate: "",
};

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [experienceForm, setExperienceForm] = useState(initialExperience);
  const [show, setShow] = useState(false);
  useEffect(() => {
    getExperience().then((response) => setExperiences(response.data));
  }, []);

  const editExperienceHandler = (id) => {
    const item = experiences.filter((exp) => (exp.id = id))[0];
    setShow(true);
  };

  return (
    <>
      <Card className="my-3">
        <Card.Header>
          <h3 className="d-inline">Experience</h3>
          <button className="float-end btn btn-sm mx-2">add</button>
        </Card.Header>

        <Card.Body>
          {experiences.map((exp, ind) => (
            <ExperienceCard
              key={ind}
              experience={exp}
              showModal={editExperienceHandler}
            />
          ))}
        </Card.Body>
      </Card>

      {/* add ecperience */}
      <AddExperience />

      {/* update Experience */}
      <UpdateExperience show={show} onHide = {()=>setShow(false)} />
    </>
  );
};

export default Experience;
