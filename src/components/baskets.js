import React from "react"

import { ListGroup } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const Baskets = (props) => {

  const data = useStaticQuery(graphql`
  query {
    basketImg: file(relativePath: {eq: "basket.jpg"}) {
      childImageSharp {
          fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return (
    <div id="baskets" className="anchor p-5 d-flex align-items-center full-height ">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-6">
          <div className="mb-5">
            <h1 className="mb-3">Flamingo Baskets</h1>
            <hr className="green-divider mt-4 mb-5"></hr>
            <div className="justify-content-center" style={{margin:"auto"}}>
            <Img 
                  className="mb-4 rounded shadow" 
                  fluid={data.basketImg.childImageSharp.fluid} 
                  alt="Basket" 
            />
            </div>
            <div className="text-sm-left mt-5">
          <p>We provide companies Flämingo Baskets for their employees. These baskets contain a mixture of fresh produce, alcohols and pickled products, all from Teltow-Flämingo, Brandenburg. Great goodie for employer branding. </p>
          </div>
          </div>
        

        </div>
        </div>
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
