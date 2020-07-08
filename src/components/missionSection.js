import React from "react"
import Image from "../components/image"
import Background from "../images/mission/background.png"

const missionSection = props => (
  <div class="p-5 two-thirds-height d-flex align-items-center" style={{backgroundImage:`url(${Background})`}}>
    <div class="container kale-transparent mission text-center">
      <div class="row justify-content-center">
        <div class="col-9">
          <h1>What's Flamingo Kollektive</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p><b>Now go build something great.</b></p>
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
export default missionSection
