import React from "react";
import {
  BrowserRouter as Router,
  Route,
  //Link,
  NavLink
} from "react-router-dom";

import { CSSTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";

import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Entertainment from "./pages/Entertainment";
import Prices from "./pages/Prices";
import Sponsors from "./pages/Sponsors";
import Festivals from "./pages/Festivals";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";

import "./App.css";

const routes = [
  { path: "/", name: "Anasayfa", Component: Home, exact: true },
  { path: "/Hotel", name: "Hotel", Component: Hotel },
  { path: "/Entertainment", name: "Entertainment", Component: Entertainment },
  { path: "/Prices", name: "Prices", Component: Prices },
  { path: "/Sponsors", name: "Sponsors", Component: Sponsors },
  { path: "/Festivals", name: "Festivals", Component: Festivals },
  { path: "/Reservation", name: "Reservation", Component: Reservation },
  { path: "/Contact", name: "Contact", Component: Contact }
];

const App = () => {
  return (
    <Router hashType="noslash">
      <Navbar bg="light">
        <Navbar.Brand href="/" key="/" as={NavLink} to="/" exact>
          React Router Boilerplate
        </Navbar.Brand>
        <Nav className="ml-auto">
          {routes.map(route => (
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
        {routes.map(({ path, Component }) => (
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
