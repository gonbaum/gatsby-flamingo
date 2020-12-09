import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const MissionSection = props => {
  const data = useStaticQuery(graphql`
    query {
      missionbg: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.missionbg.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div
        id="mission"
        className="p-3 d-flex align-items-center two-thirds-height "
      >
        <div className="container-sm text-center white-container mission">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center">
                <h1 className="mb-0">Flämingo</h1>
                <h3>Kollektiv</h3>
                <hr className="green-divider mt-3 mb-md-4 "></hr>
              </div>
              <p className="p-1">
                We are a cooperation of farms and small producers from
                Teltow-Fläming with different projects aiming to rejuvenate
                village life.
              </p>
              <p className="p-1">
                We grow organic food using permaculture principles and produce
                handmade wines, liqueurs, jams, soups, juices and pickled
                vegetables. We host company offsites, flea markets, farm tours,
                weekend retreats, workshops, and theatre and music evenings. We
                also provide space for events and personal projects, including
                overnight accommodation in a tiny house.
              </p>
              <p className="p-1">
                You can visit us personally in the lovely bistro cafe Zum
                Käperling where many of our products are made, right by the
                famous Fläming Skate path.
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
