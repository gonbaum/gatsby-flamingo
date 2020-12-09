import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import Instagram from '../assets/svg/instagram.svg'
import Linkedin from '../assets/svg/linkedin.svg'

const Footer = ({ siteTitle }) => (
    <footer className="" style={{backgroundColor: "#1f7272", }} >
    <Container>
    <div className="d-flex flex-row justify-content-between align-items-center">
      
            
            <div className="justify-content-left">
            © {new Date().getFullYear()},
            {` `}{siteTitle}{` `}
            <Link to="/impressum">
             | Impressum
            </Link>
            </div>

            <div className="justify-content-center">
            <a href="https://www.instagram.com/flaemingo_farm/?hl=en"><img src={Instagram}  alt="" className="ig-icon" style={{maxHeight:"2.5rem", marginRight:"1rem"}}></img></a>
            <a href="https://www.linkedin.com/company/flaemingo-kollektiv/"><img src={Linkedin}  alt="" className="ig-icon" style={{maxHeight:"2.5rem"}}></img></a>
            </div>
            </div>
      
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