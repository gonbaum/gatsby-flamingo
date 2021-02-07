import React from "react"

import { ListGroup } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Baskets = props => {
  const data = useStaticQuery(graphql`
    query {
      smallBoxImg: file(relativePath: { eq: "small-box.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mediumBoxImg: file(relativePath: { eq: "medium-box.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      largeBoxImg: file(relativePath: { eq: "large-box.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      id="baskets"
      className="anchor p-5 d-flex align-items-center full-height "
    >
      <div className="container text-center">
        {/* Title Starts */}

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="mb-3">Flämingo Boxes</h1>
            <hr className="green-divider mt-4 mb-5"></hr>
          </div>
        </div>

        {/* Title ends */}

        {/* Row Starts */}

        <div className="row justify-content-center">
          {/* Item starts */}
          <div className="col-md-6">
            <div className="mb-5">
              <div className="text-sm-left mt-4">
                <p>
                  We offer boxes full of jams, liqueurs, soups, pickled products
                  and juices. Everything has been made by hand, out of fruit and
                  vegetables all organically grown in our beautiful village. We
                  currently have three different sized boxes, but can also
                  adjust the boxes according to your wishes and budget. These
                  boxes are perfect for every occasion, whether you are looking
                  for a birthday present for a friend, a welcome gift for your
                  new employees or simply want to stock up on delicious food.
                </p>
              </div>
            </div>
          </div>

          {/* Item ends */}
        </div>

        {/* Row ends */}

        {/* Row Starts */}

        <div className="row justify-content-center">
          {/* Item Starts */}
          <div className="col-md-6">
            <div className="mb-5">
              <div
                className="justify-content-center"
                style={{ margin: "auto" }}
              >
                <Img
                  className="mb-4 rounded shadow"
                  fluid={data.smallBoxImg.childImageSharp.fluid}
                  alt="Basket"
                />
              </div>
              <div className="text-sm-left mt-4">
                <p>
                  Small: 36 euros <br />4 jams/chutneys + 1 jar of pickled veg
                  + 1 liqueur
                </p>
              </div>
            </div>
          </div>
          {/* Item ends */}

          {/* Item starts */}
          <div className="col-md-6">
            <div className="mb-5">
              <div
                className="justify-content-center"
                style={{ margin: "auto" }}
              >
                <Img
                  className="mb-4 rounded shadow"
                  fluid={data.mediumBoxImg.childImageSharp.fluid}
                  alt="Basket"
                />
              </div>
              <div className="text-sm-left mt-4">
                <p>
                  Medium: 52 euros <br />5 jams/chutneys + 2 pickled veg or
                  soup + 2 liqueurs{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Item ends */}
        </div>

        {/* Row ends */}

        {/* Row Starts */}

        <div className="row justify-content-start">
          {/* Item starts */}
          <div className="col-md-6">
            <div className="mb-5">
              <div
                className="justify-content-center"
                style={{ margin: "auto" }}
              >
                <Img
                  className="mb-4 rounded shadow"
                  fluid={data.largeBoxImg.childImageSharp.fluid}
                  alt="Basket"
                />
              </div>
              <div className="text-sm-left mt-4">
                <p>
                  Large: 70 euros <br />6 jams/chutneys + 2 pickled veg or soup
                  + 2 liqueurs + 1 wine{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Item ends */}
        </div>

        {/* Row ends */}
      </div>
    </div>
  )
}

/* Image with componet:
          <div class="center-block" style={{ maxWidth: `300px`}}>
            <Image />
          </div>
          */
export default Baskets
