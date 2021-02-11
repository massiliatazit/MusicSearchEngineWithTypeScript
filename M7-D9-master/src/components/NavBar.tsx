import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";

class NavBar extends Component<RouteComponentProps> {
  render() {
    return (
      <Navbar expand="lg" className="navb">
        <Navbar.Brand onClick={() => this.props.history.push("/")}>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              <NavDropdown.Item>
               
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand onClick={() => this.props.history.push("/")}>
         
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
