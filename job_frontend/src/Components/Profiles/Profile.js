import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import { PencilSquare } from "react-bootstrap-icons";
import { getUserProfile } from "../../network/agent";
import MainProfileModal from "./MainProfileModal";
import ImageModal from "./ImageModal";
import ViewResume from "./ViewResume";

const Profile = () => {
  const { profile, updateProfile } = useGlobalContext();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [showResume,setShowResume] = useState(false);

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

  // console.log(modal);

  return (
    <>
      <Container>
        <Row>
          <Col md={10}>
            <Card>
              <Row className="justify-content-evenly">
                <Col xs={2} className="py-3">
                  <img
                    src={profile.profilePic}
                    className="img-fluid rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() => setImageModal(true)}
                  />
                </Col>
                <Col xs={9} className="py-3">
                  <span><h3 className="d-inline">{profile.firstName + " " + profile.lastName}</h3> <button className="float-end btn btn" onClick={() => setModal(true)}><PencilSquare size={20}/></button> </span>
                  <hr/>
                  <h6>{profile.headline}</h6>

                  {/* <button className="btn btn-info my-md-5 my-0"  onClick={()=>setShowResume(true)}>view Resume</button> */}
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={12} md={7} lg={6}>
      {showResume && <ViewResume show={showResume} onHide={() => setShowResume(false)} resume={profile.resume}/> }

          </Col>
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
        <ImageModal
          show={imageModal}
          onHide={() => setImageModal(false)}
          profilepic={profile.profilePic}
        />
      )}
    </>
  );
};

export default Profile;
