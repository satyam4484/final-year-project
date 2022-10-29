import React, { useState, useEffect } from "react";
import { getProjects } from "../../../network/agent";
import AddProject from "./AddProject";
import UpdateProject from "./UpdateProject";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((response) => {
      if (!response.error) {
        setProjects(response.data);
      }
    });
  }, []);

  return (
    <>
      
      {/* add project */}
      <AddProject/>

      {/* update project */}
      <UpdateProject/>

    </>
  );
};

export default Project;
