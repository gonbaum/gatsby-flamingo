import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const About = props => {

  const data = useStaticQuery(graphql`
  query {
    team1Img: file(relativePath: {eq: "team1.jpg"}) {
      childImageSharp {
          fluid(maxWidth: 440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team2Img: file(relativePath: {eq: "team2.jpg"}) {
      childImageSharp {
          fluid(maxWidth: 440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team3Img: file(relativePath: {eq: "team3.jpg"}) {
      childImageSharp {
          fluid(maxWidth: 440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return (
  <div className="mt-4 p-5 d-flex align-items-center full-height">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 text-center">
          <h1 className="mb-3">About us</h1>
          <hr className="green-divider mt-4 mb-4"></hr>
          {/*<h6 class="subtitle font-weight-normal">
            You can relay on our amazing features list and also our customer
            services will be great experience for you without doubt and in
            no-time
          </h6>*/}
        </div>
      </div>
      <div className="row ">

      {/* Beginning of team badges */} 

      <div className="col-lg-4 mb-4">
          <div className="row">
            <div className="col-md-12 justify-content-center text-center">
            <a href="http://prototopia.de" target="_blank">
              <Img className="rounded-circle shadow animate-img " fluid={data.team2Img.childImageSharp.fluid} alt="Prototopia" />
            </a>
            </div>
            {/*Text under image*/}
            <div className="col-md-12 text-center">
              <div className="pt-2">
                <h5 className="mt-4 font-weight-bold mb-0">Falk</h5>
                <a href="http://prototopia.de" target="_blank"><h6 className="about-subtitle">Prototopia</h6></a>
                <p className="text-sm-left team4">
                  Accredited permaculture designer Falk Gärtner provides the freshest and highest quality vegetables to restaurants and organic shops around Jüterbog and Luckenwalde. His forest oasis is the perfect example of how sustainable farming should look like. After years in the Berlin techno scene, later in digital effects, Falk decided to listen to his calling and turned to gardening.
                </p>
                {/*<ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-behance"></i>
                    </a>
                  </li>
              </ul>*/}
              </div>
            </div>
          </div>
        </div>

        {/* End of team badge */}

        <div className="col-lg-4 mb-4">
          <div className="row ">
            <div className="col-md-12 justify-content-center text-center">
            <a href="https://www.datscha-froehden.de" target="_blank">
              <Img className="rounded-circle shadow animate-img" fluid={data.team1Img.childImageSharp.fluid} alt="Artur and Thanh" />
            </a>
            </div>
            {/*Text under image*/}
            <div className="col-md-12 text-center">
              <div className="pt-2">
                <h5 className="mt-4 font-weight-bold mb-0">Artur + Thanh</h5>
                <a href="https://www.datscha-froehden.de" target="_blank"><h6 className="about-subtitle">Datscha Fröhden</h6></a>
                <p className="text-sm-left team4">
                Datscha Fröhden is the project of Artur and Thanh. In 2017, after a one year trip to South East Asia, they returned to Berlin with an itch for a lifestyle change. They took over a small farmhouse in Fröhden, and began to make it their own home. Farm life was something already familiar to Artur, having grown up in rural Poland, however was a complete new experience for Thanh, coming from suburban Sydney. Learning by doing, they implemented a permaculture garden in the overgrown garden which was left untouched and unwanted for eight years. They grow fresh vegetables, not only for themselves and friends, but for the visitors they frequently host. They have organised company offsites, chess weekends and farm-to-table dinners.
                </p>
                {/*<ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-behance"></i>
                    </a>
                  </li>
                </ul>*/}
              </div>
            </div>
          </div>
        </div>

        {/* End of Team Badge */}

        <div className="col-lg-4 mb-4">
          <div className="row">
            <div className="col-md-12 justify-content-center text-center">
            <a href="https://www.kaeperling.de/" target="_blank">
              <Img className="rounded-circle shadow animate-img" fluid={data.team3Img.childImageSharp.fluid} alt="Zum Käperling" />
            </a>
            </div>
            {/*Text under image*/}
            <div className="col-md-12 text-center">
              <div className="pt-2">
                <h5 className="mt-4 font-weight-bold mb-0">Manulita</h5>
                <a href="https://www.kaeperling.de/" target="_blank"><h6 className="about-subtitle">Zum Käperling</h6></a>
                <p className="text-sm-left team4">
                An eye doctor by trade, Manulita dedicates her off time to her garden. In her cafe in Fröhden you can find all the different varieties of jams, wines, liqueurs and pickled products, all handmade herself from the fruits and vegetables of her garden.
                </p>
                {/*<ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-decoration-none d-block px-1">
                      <i class="icon-social-behance"></i>
                    </a>
                  </li>
            </ul>*/}
              </div>
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
export default About
