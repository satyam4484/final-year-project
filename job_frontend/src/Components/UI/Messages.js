import React, { useState } from "react";
import { Toast, Row, Col, ToastContainer } from "react-bootstrap";
import { useGlobalContext } from "../../context";

const Messages = ({variant,title,message}) => {
  const {setMessage} = useGlobalContext();
    const [show,setShow] = useState(true);
    const setShowHandler = ()=> {
      setMessage(false,'','','');
      setShow(false);
    }

    setTimeout(() => {
      setMessage(false,'','','');
      setShow(false);
    },5000)
  return (
    <Col md={4} sm={2}>
    <ToastContainer className="p-3 mt-5" position="top-end">
      <Toast bg={variant} onClose={setShowHandler} show={show}  autohide>
        <Toast.Header className="bg-secondary justify-content-around" closeButton>
            <h6>{title}</h6>
        </Toast.Header>
        <Toast.Body className={`bg-${variant}`}><h6>{message}</h6></Toast.Body>
      </Toast>
    </ToastContainer>
    </Col>
  );
};

export default Messages;
