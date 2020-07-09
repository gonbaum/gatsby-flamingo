import React from "react"
import Map from './map'
import Mail from '../assets/svg/mail2.svg'
import Home from '../assets/svg/home.svg'
import Handy from '../assets/svg/phone3.svg'

const Contact = props => (
  <div
    id="contact"
    class="rose p-5 d-flex align-items-center two-thirds-height "
  >
    <div class="container-fluid text-center">
      <h1 style={{ paddingBottom: "3rem" }}>Contact</h1>
      <Map />
      <br></br>
      <br></br>
      <div class="row justify-content-center">
        <div class="col-md-3 mb-5 d-flex flex-column align-items-center text-justify">
        <img class="mb-4" style={{maxHeight: '3em'}} src={Home}></img>
          <h2 class="text-center mb-4">Address</h2>
          <span style={{paddingLeft:"2rem"}}>
              David Mathews
            <br />
            1011 Malesuada Road
            <br />
            Moscow Kentucky 77382
          </span>
        </div>
        <div class="col-md-3 mb-5 d-flex flex-column align-items-center text-justify">
        <img class="mb-4" style={{maxHeight: '3em'}} src={Handy}></img>
          <h2 class="text-center mb-4">Phone</h2>
          <span>(357) 616-5411</span>
        </div>
        <div class="col-md-3 col-md-offset-2 mb-5 d-flex flex-column align-items-center text-justify">
        <img class="mb-4" style={{maxHeight: '3em'}} src={Mail}></img>
          <h2 class="text-center mb-4">Email</h2>
          <a style={{color: '#512342'}} href="mailto:email@example.com">email@example.com</a>
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
export default Contact
