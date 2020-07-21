import React from "react"
import Map from "./map"
import Mail from "../assets/svg/mail2.svg"
import Home from "../assets/svg/home.svg"
import Handy from "../assets/svg/phone3.svg"

const Contact = props => (
  <div id="contact" className="anchor p-5 d-flex align-items-center two-thirds-height ">
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div>
            <h1>Contact</h1>
            <hr className=" green-divider mt-4 align-items-center"></hr>
          </div>
          <div className="align-items-center">
            <Map />
          </div>
          <br></br>
          <br></br>
          <div className="row justify-content-center">
            <div className="col-lg-3 lg-5 d-flex flex-column align-items-center text-justify">
              {/*<img
                className="mb-4"
                style={{ maxHeight: "3em" }}
                src={Home}
                alt="Address"
              ></img>*/}
              <h2 className="text-center mb-4">Address</h2>
              <span>
                Fröhden/Markendorf
                <br />
                14913
              </span>
            </div>

            {/*<div class="col-md-3 mb-5 d-flex flex-column align-items-center text-justify">
            <img class="mb-4" style={{maxHeight: '3em'}} src={Handy} alt="Tel"></img>
              <h2 class="text-center mb-4">Phone</h2>
              <span>(357) 616-5411</span>
            </div>*/}

            <div className="col-lg-3 col-lg-offset-2 mb-5 d-flex flex-column align-items-center text-justify">
              {/*<img
                className="mb-4"
                style={{ maxHeight: "3em" }}
                src={Mail}
                alt="Email"
              ></img>*/}
              <h2 className="text-center mb-4">Email</h2>
              <a style={{ color: "#512342" }} href="mailto:email@example.com">
                flaemingo@posteo.net
              </a>
            </div>
          </div>
        </div>
       </div>
    </div>
    
  </div>
)

export default Contact
