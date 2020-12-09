import React from "react"
import Map from "./map"

const Contact = props => (
  
  <div id="contact" className="anchor p-5 d-flex flex-column align-items-center two-thirds-height mb-3">
    <div className="container mb-3">
      <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <div>
              <h1>Contact</h1>
              <hr className=" green-divider mt-4 align-items-center"></hr>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid mb-4">
      <Map />
    </div>
    <div className="container text-center">
    <div className="row justify-content-center">
            <div className="col-md-3 col-12 offset-lg-1 d-flex flex-column text-md-left mb-4">
              <h2 className="green-subtitle mb-3">Address</h2>
              <span>
                Fröhden
                <br />
                14913
              </span>
            </div>

            <div className="col-md-3 col-12 d-flex flex-column text-md-left  ">
              <h2 className="green-subtitle mb-3 ">Email</h2>
              <a style={{ color: "#512342" }} href="mailto:email@example.com">
                flaemingo@posteo.net
              </a>
            </div>
          </div>    
    </div>
  </div>
)

export default Contact
