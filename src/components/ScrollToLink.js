import React from "react"
import { Link } from "gatsby"

const ScrollToLink = ({ to, title, classes, active }) => (
  <Link to={`/#${to}`} className={classes} activeClassName={active}>{title}</Link>
) 

export default ScrollToLink