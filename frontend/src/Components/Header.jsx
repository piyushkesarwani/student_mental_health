import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { authContextState } from "../Context/Context";

export const Header = () => {
  const { currentUser, logout, login } = authContextState();
  return (
    <div>
      {console.log("CurrentUser = ", currentUser)}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MindHealth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center gap-4">
                <Link className="no-underline text-white" to="/">
                  Home
                </Link>
                <Link className="no-underline text-white" to="/quiz">
                  Screen Test
                </Link>
                <Link className="no-underline text-white" to="/profile">
                  Profile
                </Link>
              </div>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <div className="flex justify-center items-center gap-3">
                <div>
                  {currentUser && <p className="text-white">Welcome, {currentUser?.username}</p>}
                </div>
                {currentUser ? (
                  <button
                    onClick={() => logout()}
                    className="text-white bg-blue-400 p-2 rounded-md"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="text-white bg-blue-400 p-2 rounded-md">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
