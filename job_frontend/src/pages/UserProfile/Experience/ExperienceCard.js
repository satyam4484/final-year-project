import React from "react";

const ExperienceCard = ({experience,showModal}) => {
  return (
    <div class="card">
      <div class="card-horizontal">
        <div class="img-square-wrapper">
          <img
            class=""
            src="http://via.placeholder.com/300x180"
            alt={experience.companyName}
          />
        </div>
        <div class="card-body">
        <button className="float-end" onClick={()=> showModal(experience.id)}>Edit</button>
          <h5 class="card-title">{experience.role} </h5>
          <h6 className="card-title"> {experience.companyName} . {experience.employementType}</h6>
          <h6 className="card-title text-muted"> {experience.startdate} - {experience.enddate}</h6>
          <h6 className="card-title text-secondary fw-bold"> {experience.location}</h6>
          <p class="card-text">
            {experience.description}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default ExperienceCard;
