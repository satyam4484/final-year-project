import React from "react";
import {Card} from "react-bootstrap";
import {PencilSquare, Trash } from "react-bootstrap-icons";


const WebsiteCard = ({website,deleteWebsite,editWebsite}) => {

  return (
    <Card className="m-3 bordered shadow-lg">
      <Card.Body>
        <Card.Title>
          {website.name}
          <button
            className="float-end btn btn-sm mx-auto hover"
            onClick={()=>deleteWebsite(website.id)}
          >
            <Trash size="20" color="red" />
          </button>
          <button
            className="float-end btn btn-sm mx-auto hover"
            onClick={() => editWebsite(website.id)}
          >
            <PencilSquare size="20" color="yellow" />
          </button>
        </Card.Title>
        <Card.Text>
          <a href={website.link} target="_blank">
            {website.link}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WebsiteCard;
