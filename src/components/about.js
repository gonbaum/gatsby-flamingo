import React from "react"
import team1 from '../images/about/team1.png'
import team2 from '../images/about/team2.png'
import team3 from '../images/about/team3.png'

const About = props => (
  <div id="about" class="p-5 d-flex align-items-center full-height">
    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-md-7 text-center">
          <h1 class="mb-3">About us</h1>
          <h6 class="subtitle font-weight-normal">
            You can relay on our amazing features list and also our customer
            services will be great experience for you without doubt and in
            no-time
          </h6>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="row">
            <div class="col-md-12">
              <img
                style={{ minHeight: "22rem" }}
                src={team1}
                alt="wrapkit"
                class="img-fluid rounded-circle"
              />
            </div>
            {/*Text under image*/}
            <div class="col-md-12 text-center">
              <div class="pt-2">
                <h5 class="mt-4 font-weight-bold mb-0">Michael Doe</h5>
                <h6 class="subtitle">Property Specialist</h6>
                <p>
                  You can relay on our amazing features list and also our
                  customer services will be great experience.
                </p>
                <ul class="list-inline">
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
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="row">
            <div class="col-md-12 pro-pic">
              <img
                style={{ minHeight: "22rem" }}
                src={team2}
                alt="wrapkit"
                class="img-fluid rounded-circle"
              />
            </div>
            {/*Text under image*/}
            <div class="col-md-12 text-center">
              <div class="pt-2">
                <h5 class="mt-4 font-weight-bold mb-0">Michael Doe</h5>
                <h6 class="subtitle">Property Specialist</h6>
                <p>
                  You can relay on our amazing features list and also our
                  customer services will be great experience.
                </p>
                <ul class="list-inline">
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
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="row">
            <div class="col-md-12 pro-pic">
              <img
                style={{ minHeight: "22rem" }}
                src={team3}
                alt="wrapkit"
                class="img-fluid rounded-circle"
              />
            </div>
            {/*Text under image*/}
            <div class="col-md-12 text-center">
              <div class="pt-2">
                <h5 class="mt-4 font-weight-bold mb-0">Michael Doe</h5>
                <h6 class="subtitle">Property Specialist</h6>
                <p>
                  You can relay on our amazing features list and also our
                  customer services will be great experience.
                </p>
                <ul class="list-inline">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

/* Image with componet:
          <div class="center-block" style={{ maxWidth: `300px`}}>
            <Image />
          </div>
          */
export default About
