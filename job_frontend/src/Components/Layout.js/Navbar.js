import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const Mynavbar = () => {
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" sticky="top" expand="sm" className="">
      <Container>
        <Navbar.Brand href="#">Job Alert</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas
              id="offcanvasNavbar-expand-sm"
              aria-labelledby="offcanvasNavbar-expand-sm"
              placement="end"
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                  Offcanvas
                </Offcanvas.Title>
                <hr/>
              </Offcanvas.Header>

              <Offcanvas.Body >
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link className="hover">Home</Nav.Link>
              </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Mynavbar;
