import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import {
  getWebsites,
  deleteWebsites,
  addWebsites,
  updateWebsite
} from "../../../network/agent";
import WebsiteCard from "./WebsiteCard";
import Addwebsite from "./Addwebsite";
import EditWebsite from "./EditWebsite";

const Website = () => {
  const [websites, setWebsites] = useState([]);
  const [editData,setEditData] = useState({});


  const [modal, setModal] = useState({
    modalType: "",
    show: false,
  });

  useEffect(() => {
    getWebsites().then((response) => {
      if (!response.error) {
        setWebsites(response.data);
      }
    });
  }, []);

  const deleteWebsiteHandler = (id) => {
    deleteWebsites(id).then((response) => {
      const sites = websites.filter((item) => item.id != id);
      setWebsites(sites);
    });
  };
  const editWebsiteHandler = (id) => {
    const data = websites.filter((item) => item.id === id)[0];
    setEditData(data);
    setModal((modal) => {
      return { ...modal, modalType: "edit", show: true };
    });
  };


  const updateWebsite = (data) => {
    setModal((modal) => {
      return { ...modal, modalType: "", show: false };
    });

    console.log(data);
    updateWebsite(data,data.id).then(response => console.log(response));
  }

  const addWebsiteHandler = () => {
    setModal((modal) => {
      return { ...modal, modalType: "add", show: true };
    });
  };

  const addWebsiteToDatabase = (data) => {
    addWebsites(JSON.stringify(data)).then((response) => {
      setWebsites((state) => [...state, response.data]);
    });
  };

  return (
    <Card className="my-3">
      <Card.Header>
        <h3 className="d-inline p-4">Websites</h3>
        <button
          className="float-end btn btn-sm mx-2 hover"
          onClick={addWebsiteHandler}
        >
          <PlusLg size="25" />
        </button>
      </Card.Header>

      <Card.Body style={{ height: "300px", overflow: "auto" }}>
        {websites.map((website, index) => (
          <WebsiteCard
            key={index}
            website={website}
            deleteWebsite={deleteWebsiteHandler}
            editWebsite={editWebsiteHandler}
          />
        ))}
      </Card.Body>

      {/* add website handler  */}
      {modal.modalType === "add" && (
        <Addwebsite
          addWebsite={addWebsiteToDatabase}
          show={modal.show}
          onHide={() =>
            setModal((state) => {
              return { ...modal, show: false, modelType: "" };
            })
          }
        />
      )}

      {/* edit website handler */}
      {modal.modalType === "edit" && (
        <EditWebsite
          show={modal.show}
          onHide={() =>
            setModal((state) => {
              return { ...modal, show: false, modelType: "" };
            })
          }
          value={editData}
          setValue = {updateWebsite}
        />
      )}
    </Card>
  );
};

export default Website;

