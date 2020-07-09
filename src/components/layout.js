/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/custom.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Add smooth scrolling:

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
    <div className="flexThisBox">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <div>{ children }</div>
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
    </>
  )
}

  /*<main>
        <div class="d-flex flex-column">
          <div class="p-2 bg-info">Flex item 1</div>
          <div class="p-2 bg-warning">Flex item 2</div>
          <div class="p-2 bg-primary">Flex item 3</div>
        </div>
      </main>*/

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
