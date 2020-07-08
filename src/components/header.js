import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import ScrollToLink from "./ScrollToLink"

/* Use Link component from Gatsby combined with bootstrap classes nav-link and active to leverage activeClassName prop of the element that Nav.Link from bootstrap doesn't have*/
const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar expand="md">
        <Navbar.Brand href="/">
          <img
            src="https://flamingo-pflegeservice.de/wp-content/uploads/2019/07/FLamingo-Logo-Neu.png"
            alt=""
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <ScrollToLink
                to="offsites"
                title="Offsites"
                classes="nav-link"
                active="active"
              />
            </Nav.Item>
            <Nav.Item as="li">
              <ScrollToLink
                to="about"
                title="About"
                classes="nav-link"
                active="active"
              />
            </Nav.Item>
            <Nav.Item as="li">
              <ScrollToLink
                to="mission"
                title="Mission"
                classes="nav-link"
                active="active"
              />
            </Nav.Item>
            <Nav.Item>
              <ScrollToLink
                to="contact"
                title="Contact"
                classes="nav-link"
                active="active"
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
