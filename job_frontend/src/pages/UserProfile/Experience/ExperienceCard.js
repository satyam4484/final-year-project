import React from "react";

const ExperienceCard = ({experience,showModal}) => {
  return (
    <div className="card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <img
            className="img-fluid"
            src="http://via.placeholder.com/300x180"
            alt={experience.companyName}
          />
        </div>
        <div className="card-body">
        <button className="float-end" onClick={()=> showModal(experience.id)}>Edit</button>
          <h5 class="card-title">{experience.role} </h5>
          <h6 className="card-title"> {experience.companyName} . {experience.employementType}</h6>
          <h6 className="card-title text-muted"> {experience.startdate} - {experience.enddate}</h6>
          <h6 className="card-title text-secondary fw-bold"> {experience.location}</h6>
          <p className="card-text">
            {experience.description}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default ExperienceCard;
