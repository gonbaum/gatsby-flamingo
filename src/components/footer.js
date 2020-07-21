import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"
import Instagram from '../assets/svg/instagram.svg'

const Footer = ({ siteTitle }) => (
    <footer className="" style={{backgroundColor: "#1f7272", }} >
    <Container>
    <div className="d-flex flex-row justify-content-between align-items-center">
      
            
            <a href="#">© {new Date().getFullYear()},
            {` `}{siteTitle}</a>
      
      
            <a href="#"><img src={Instagram}  alt="" className="ig-icon" style={{maxHeight:"2.5rem"}}></img></a>
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