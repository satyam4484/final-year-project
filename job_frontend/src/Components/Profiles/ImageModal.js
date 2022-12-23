import React,{useState} from "react";
import { Modal, Button } from "react-bootstrap";
import { updateUserProfile } from "../../network/agent";
import { useGlobalContext } from "../../context";


const ImageModal = ({ show, onHide, profilepic }) => {
  const [image,setImage] = useState('');
  const {updateProfile} = useGlobalContext();

  const changeProfilePhotoHandler = ()=> {
    if(image.length === 0) {
      return;
    }
    let data = new FormData();
    data.append('profilePic',image);
    updateUserProfile(data).then(response => {
      setImage('');
      onHide('');
      updateProfile(response.data);
    })

  }
  
  return (
    <Modal
      show={show}
      onHide={()=>{
        setImage('');
        onHide();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
    >
      <Modal.Header className="text-center" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Profile Pic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img src={profilepic} className="img-fluid w-50 " />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info"  onClick={changeProfilePhotoHandler}>Change photo</Button>
        <input type="file" className="form-control d-inline"  onChange={(e)=>setImage(e.target.files[0])} accept="image/png, image/gif, image/jpeg"  />
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
