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
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand onClick={() => this.props.history.push("/")}>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link>Ya</Nav.Link>
            <Nav.Link>Like</Nav.Link> */}
            <NavDropdown title="pop?" id="basic-nav-dropdown">
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
