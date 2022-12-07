import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import { PencilSquare } from "react-bootstrap-icons";
import { getUserProfile } from "../../network/agent";
import MainProfileModal from "./MainProfileModal";
import ImageModal from "./ImageModal"

const Profile = () => {
  const { profile, updateProfile } = useGlobalContext();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [imageModal,setImageModal] = useState(false);

  useEffect(() => {
    if (
      Object.keys(profile).length > 0 &&
      (!profile.firstName || !profile.lastName)
    ) {
      setModal(true);
    }
  }, []);

  const updateProfileHandler = (data) => {
    setModal(false);
    updateProfile(data);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-evenly ">
          <Card>
            <Col md={2} className="py-3">
                <img
                  src={profile.profilePic}
                  className="img-fluid rounded"
                  style={{cursor:"pointer"}}
                  onClick={()=>setImageModal(true)}
                />
            </Col>
            <Col md={8} className="py-3"></Col>
          </Card>
        </Row>
      </Container>

      {modal && (
        <MainProfileModal
          show={modal}
          onHide={() => setModal(false)}
          profile={profile}
          updateProfileHandler={updateProfileHandler}
        />
      )}

      {imageModal && (
        <ImageModal show={imageModal} onHide={()=>setImageModal(false)} profilepic={profile.profilePic}/>
      )}
    </>
  );
};

export default Profile;
