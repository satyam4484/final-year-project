// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import {Button,Container,Form,Nav,Navbar,NavDropdown,Offcanvas} from 'react-bootstrap';

const Mynavbar = () => {

    return (
      <Navbar bg='dark' expand='md' className=''>
        <Container >
          <Navbar.Brand href='#'>Job</Navbar.Brand>
        </Container>
      </Navbar>
    ) 
}

export default Mynavbar;