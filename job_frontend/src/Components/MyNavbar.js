import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Offcanvas,
  Container,
  Form,
} from "react-bootstrap";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  HouseDoorFill,
  BriefcaseFill,
  BellFill,
  BoxArrowInRight,
} from "react-bootstrap-icons";

import pic from "../assests/images/pic.jpeg";

const MyNavbar = () => {
  const { isLoggedIn,user,userLogout } = useGlobalContext();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navigate = useNavigate();

  const userLogoutHandler = ()=>{
    userLogout();
    navigate("/");
  }

  return (
    <Navbar
      sticky="top"
      className="mb-3"
      expand="md"
      bg="primary"
      variant="dark"
      expanded={toggleNavbar}
    >
      <Container fluid>
        <NavLink to="/" className="navbar-brand sm-auto mx-md-5 mx-auto p-0">
          REVUP
        </NavLink>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-sm"
          onClick={() => setToggleNavbar((prev) => !prev)}
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbar-expand-md"
          placement="end"
        >
          <Offcanvas.Header className="bg-primary text-light">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              REVUP
            </Offcanvas.Title>
            <Button
              className="btn-close btn-info text-reset"
              onClick={() => setToggleNavbar((prev) => !prev)}
            ></Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-evenly flex-grow-1">
              <Form className="d-flex mx-2">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>

            <Nav className="justify-content-center flex-grow-1 pe-3 mx-auto">
              {/* navlink items to be looped when have variable data */}
              <Link
                to="/"
                className={`nav-link my-1 my-sm-0 `}
                onClick={() => setToggleNavbar(false)}
              >
                <HouseDoorFill size="20" /> <span className="mx-1">Home</span>
              </Link>

              <NavLink
                to="/jobs"
                onClick={() => setToggleNavbar(false)}
                className={`nav-link my-1 my-sm-0 ${(isActive) =>
                  isActive ? "active" : ""}`}
              >
                <BriefcaseFill size="20" />
                <span className="mx-1">Jobs</span>
              </NavLink>

              {isLoggedIn && (<NavLink
                onClick={() => setToggleNavbar(false)}
                to="/notifications"
                className={`nav-link my-1 my-sm-0 ${(isActive) =>
                  isActive ? "active" : ""}`}
              >
                <BellFill size="20" />
                <span className="mx-1">Notifications</span>
              </NavLink> ) } 

              

              {/* Authentication */}
              {!isLoggedIn && (
                <NavLink
                  to="/auth/signup"
                  onClick={() => setToggleNavbar(false)}
                  className={`nav-link my-1 my-sm-0 ${(isActive) =>
                    isActive ? "active" : ""}`}
                >
                  <BoxArrowInRight size="20" />
                  <span className="mx-1">Signup</span>
                </NavLink>
              )}

              {!isLoggedIn && (
                <NavLink
                  to="/auth/login"
                  onClick={() => setToggleNavbar(false)}
                  className={`nav-link my-1 my-sm-0 ${(isActive) =>
                    isActive ? "active" : ""}`}
                >
                  <BoxArrowInRight size="20" />
                  <span className="mx-1">Login</span>
                </NavLink>
              )}

              {/* EndAuthentication */}
            </Nav>

            {/* profile */}

            {isLoggedIn && <Nav className="justify-content-center flex-grow-1">
              <li className="nav-item dropdown-center dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {/* <div className="nav-profile p-0 m-0">
                    <img src={pic} className="img-fluid" />
                  </div> */}
                  <span>aa@gmail.com</span>
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to={(user.usertype === 1?`/profile/${user.email}`:`/company/${user.email}`)} className={`dropdown-item ${(isActive) => isActive ? "active" : ""}`}>profile</NavLink></li>
                  <li><NavLink to="/signup" className={`dropdown-item ${(isActive) => isActive ? "active" : ""}`}>{(user.usertype === 1?'Applied Jobs':'Jobs Posted')}</NavLink></li>
                  <li><a className='dropdown-item' style={{ cursor: 'pointer' }} onClick={userLogoutHandler} >
                    Logout <BoxArrowInRight size="20" />
                  </a></li>
                </ul>
              </li>
              </Nav>}

            {/* endprofile */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
