import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const MissionSection = props => {

  const data = useStaticQuery(graphql`
  query {
    missionbg: file(relativePath: {eq: "background.jpg"}) {
      childImageSharp {
          fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (

    <BackgroundImage fluid={data.missionbg.childImageSharp.fluid} backgroundColor={`#040e18`}>
    <div id="mission" className="p-3 d-flex align-items-center two-thirds-height ">
      <div className="container-sm text-center white-container mission">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center">
            <h1 className="mb-0">Flämingo</h1>
            <h3>Kollektiv</h3>
            <hr className="green-divider mt-3 mb-md-4 "></hr>
            </div>
            <p className="p-1">
              We are a collective of small organic farms in Teltow-Fläming, Brandenburg. We produce vegetables free of chemicals and pesticides using permaculture principles. We make homemade products, such as jams, alcohols and pickled vegetables, provide fresh produce to local restaurants and shops, and host events ranging from farm-to-table dinners, weekend workshops, to company offsites.
            </p>
            {/*<p><b>Now go build something great.</b></p>*/}
          </div>

        </div>
      </div>
      <a id="about"></a>
    </div>
    </BackgroundImage>
  )
}

export default MissionSection
