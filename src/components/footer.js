import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

const Footer = ({ siteTitle }) => (
    <footer className="bg-dark">
    <Container>
            © {new Date().getFullYear()},
            {` `}
            <a href="/">{siteTitle}</a>
    </Container>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer