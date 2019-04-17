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

import logo from "./assets/img/logo.png";
import "./App.css";

const routes = [
  { path: "/", name: "Anasayfa", Component: Home, exact: true },
  { path: "/Hotel", name: "Otel", Component: Hotel },
  { path: "/Entertainment", name: "Eğlence", Component: Entertainment },
  { path: "/Prices", name: "Fiyatlar", Component: Prices },
  { path: "/Sponsors", name: "Sponsorlar", Component: Sponsors },
  { path: "/Festivals", name: "Geçmiş Festivaller", Component: Festivals },
  { path: "/Reservation", name: "Rezervasyon", Component: Reservation },
  { path: "/Contact", name: "İletişim", Component: Contact }
];

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
