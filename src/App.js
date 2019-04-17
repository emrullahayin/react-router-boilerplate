import React from "react";
import {
  HashRouter as Router,
  Route,
  //Link,
  NavLink
} from "react-router-dom";

import { CSSTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";

import Routes from "./Routes";

import logo from "./assets/img/logo.png";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar bg="light">
        <Navbar.Brand href="/" key="/" as={NavLink} to="/" exact>
          <img
            src={logo}
            width="80"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          {Routes.map(route => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              activeClassName="active"
              exact
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      <Container className="container">
        {Routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={200}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Container>
    </Router>
  );
};
export default App;
