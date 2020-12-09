import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      chessWeekendImg: file(relativePath: { eq: "chessweekend.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      offsite1Img: file(relativePath: { eq: "offsite1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      offsite2Img: file(relativePath: { eq: "offsite2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      offsite3Img: file(relativePath: { eq: "offsite3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      id="events"
      className="anchor p-5 d-flex align-items-center full-height "
    >
      <div className="container text-center">
        {/*First Row*/}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="mb-3">Events</h1>
            <hr className="green-divider mt-4 mb-5"></hr>
          </div>
        </div>

        {/*Second Row */}
        <div className="row justify-content-center">
          {/*First Column*/}
          <div className="col-md-5">
            <div className="event">
              <h2 className="text-sm-left mb-4 green-subtitle">
                Offsite Meetings
              </h2>
              <p className="text-sm-left mb-5">
                Looking for a quiet place outside Berlin, to gather as a team
                and discuss strategy and ideas? We can host teams of up to 30.
                With large rooms, and various outdoor undercover spaces, we have
                the space for your team to unwind and recharge from city life.
                We can also provide healthy seasonal meals, direct from our
                garden.
              </p>
            </div>
          </div>

          {/*Second Column*/}
          <div className="col-md-5">
            <div className="event">
              <h2 className="text-sm-left mb-4 green-subtitle">
                Chess Weekend
              </h2>
              <p className="text-sm-left mb-5">
                Every year Datscha Fröhden organises a chess weekend for all
                lovers of the game. Chess lovers of any level spend time playing
                games in the garden, watching related movies and documents and
                eating home grown food.
              </p>
            </div>
          </div>
        </div>

        {/*Third Row */}
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Img
              className="mb-5 rounded shadow-sm"
              fluid={data.chessWeekendImg.childImageSharp.fluid}
              alt="Chess weekend"
            />
            <Img
              className="mb-5 rounded shadow-sm"
              fluid={data.offsite1Img.childImageSharp.fluid}
              alt="Offsite 1"
            />
          </div>
          <div className="col-md-5">
            <Img
              className="mb-5 rounded shadow-sm"
              fluid={data.offsite3Img.childImageSharp.fluid}
              alt="Offsite 3"
            />
            <Img
              className="mb-5 rounded shadow-sm"
              fluid={data.offsite2Img.childImageSharp.fluid}
              alt="Offsite 2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
