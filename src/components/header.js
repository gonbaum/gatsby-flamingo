import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import ScrollToLink from "./ScrollToLink"
import Logo from '../images/logo3.png'

/* Use Link component from Gatsby combined with bootstrap classes nav-link and active to leverage activeClassName prop of the element that Nav.Link from bootstrap doesn't have*/
const Header = ({ siteTitle }) => (
  <header className="koTtll shadow-sm">
    <Container>
      <Navbar expand="md">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            alt=""
            
            height="75rem"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto ">
            <Nav.Item as="li">
              <ScrollToLink
                to="mission"
                title="Mission"
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
                to="events"
                title="Events"
                classes="nav-link"
                active="active"
              />
            </Nav.Item>

            <Nav.Item as="li">
              <ScrollToLink
                to="baskets"
                title="Baskets"
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
