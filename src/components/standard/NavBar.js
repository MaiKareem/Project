import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filter } from "../../JS/slices/gameSlice";
import { LinkContainer } from "react-router-bootstrap";

export function NavBar() {
  const [dropGenre, setDropGenre] = useState("");
  const [dropPlat, setDropPlat] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filter({ search, genre: dropGenre, platform: dropPlat }));
  }, [dropGenre, dropPlat, search, dispatch]);

  // console.log(e.target.elements.search.value); //view what the user searched
  // dispatch(search(e.target.elements.search.value)); //whats inside Search() is the action payload aka key

  return (
    <Navbar
      bg="special-color"
      expand="lg"
      style={{ "background-color": "#3b465e ", color: "#bdbdbd" }}
    >
      <Container style={{ color: "#bdbdbd" }}>
        <Navbar.Brand style={{ color: "#bdbdbd" }}>FreeToGame</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/" style={{ color: "#bdbdbd" }}>
              <Nav.Link> Home </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/latest-release" style={{ color: "#bdbdbd" }}>
              <Nav.Link>Latest Releases</Nav.Link>
            </LinkContainer>
            <NavDropdown
              style={{ color: "red" }}
              title="Genre"
              id="basic-nav-dropdown"
              onSelect={(eventKey) => {
                setDropGenre(eventKey);
              }}
            >
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="MMO"
              >
                MMO
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="MMORPG"
              >
                MMORPG
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Shooter"
              >
                Shooter
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Strategy"
              >
                Strategy
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Moba"
              >
                ShoMobaoter
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Card Games"
              >
                Card Games
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Racing"
              >
                Racing
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Sports"
              >
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Social"
              >
                Social
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Fighting"
              >
                Fighting
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              style={{ " background-color": "#3b465e", color: "#bdbdbd" }}
              title="Platform"
              id="basic-nav-dropdown"
              onSelect={(eventKey) => {
                setDropPlat(eventKey);
              }}
            >
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="PC"
              >
                PC
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ "background-color": "#3b465e", color: "#bdbdbd" }}
                eventKey="Browser"
              >
                Browser
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
