import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Form,
  Button,
  CloseButton,
  NavDropdown,
} from "react-bootstrap";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { navitems } from "../../data";
import { colors } from "../../data";
import { useGlobalContext } from "../../context";

const Mynavbar = () => {
  const { themeColor, setThemeColor, isloggedin, userLogout, profile, user } = useGlobalContext();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const navigate = useNavigate();

  const colorChangeHandler = (e) => {
    setThemeColor(e.target.name);
    setToggleDropDown(false);
  };

  const useLogoutHandler = () => {
    userLogout();
    navigate('/login');
  }

  return (
    <Navbar
    sticky="top"
      className="mb-3"
      expand="sm"
      bg={themeColor}
      variant="dark"
      expanded={toggleNavbar}
      
    >
      <Container fluid>
        <NavLink to="/" className="navbar-brand sm-auto mx-auto">
          Rev Up
        </NavLink>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-sm"
          onClick={() => setToggleNavbar((prev) => !prev)}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbar-expand-sm"
          placement="end"
        >
          <Offcanvas.Header>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
              Offcanvas
            </Offcanvas.Title>
            <Button
              className="btn-close btn-info text-reset"
              onClick={() => setToggleNavbar((prev) => !prev)}
            ></Button>
          </Offcanvas.Header>

          <Offcanvas.Body>

            <Nav className="justify-content-center flex-grow-1 pe-3">
              {/* <Form className="">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}

              <NavLink to="/" className={`nav-link my-1 my-sm-0 ${(isActive) => isActive ? "active" : ""}`} onClick={() => setToggleNavbar(false)} >
                Home
              </NavLink>
              <NavLink to="/jobs" className={`nav-link my-1 my-sm-0 ${(isActive) => isActive ? "active" : ""}`} onClick={() => setToggleNavbar(false)} >
                Jobs
              </NavLink>
              {!isloggedin && <NavLink to="/login" className={`nav-link my-1 my-sm-0 ${(isActive) => isActive ? "active" : ""}`} onClick={() => setToggleNavbar(false)} >
                Login
              </NavLink>}
              {!isloggedin && <NavLink to="/signup" className={`nav-link my-1 my-sm-0 ${(isActive) => isActive ? "active" : ""}`} onClick={() => setToggleNavbar(false)} >
                Signup
              </NavLink>}


              {/* looping all navitem to be added  */}
              {/* {/* {navitems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.url}
                  className={`nav-link my-1 my-sm-0 ${(isActive) =>
                    isActive ? "active" : ""}`}
                  onClick={() => setToggleNavbar(false)}
                >
                  {item.title}
                </NavLink>
              ))} */}
            </Nav>
            {isloggedin && <Nav className="justify-content-center flex-grow-1">
              <li className="nav-item dropdown-center dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span>{user.email}</span>
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to={`/profile/${user.email}`} className={`dropdown-item ${(isActive) => isActive ? "active" : ""}`}>profile</NavLink></li>
                  <li><NavLink to="/signup" className={`dropdown-item ${(isActive) => isActive ? "active" : ""}`}>Applied Jobs</NavLink></li>
                  <li><a className='dropdown-item' style={{ cursor: 'pointer' }} onClick={useLogoutHandler} >
                    Logout
                  </a></li>
                </ul>
              </li>


              {/* {isloggedin && <NavLink to="/profile" className={`nav-link my-1 my-sm-0 ${(isActive) =>isActive ? "active" : ""}`} onClick={() => setToggleNavbar(false)} >
                Profile
              </NavLink>} */}
            </Nav>}

            <Nav className="justify-content-end">
              <NavDropdown
                title="Color theme"
                id="basic-nav-dropdown"
                show={toggleDropDown}
                onClick={() => setToggleDropDown(!toggleDropDown)}
                drop="start"
              >
                {colors.map((color) => (
                  <div key={color} className="d-flex hover">
                    <Button
                      name={color}
                      className={`round  mx-2 my-2 d-inline`}
                      variant={color}
                      onClick={colorChangeHandler}
                    ></Button>
                    <p>{color}</p>
                  </div>
                ))}
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Mynavbar;
