import React from "react"
import OffsiteImg from "../images/offsites/offsite.png"

const Offsites = props => (
  <div
    id="offsites"
    class="p-5 kale-background d-flex align-items-center full-height"
  >
    <div class="container-fluid text-center">
      <h1 style={{ paddingBottom: "2rem" }}>Offsites</h1>
      <img
        class="mb-5 img-fluid rounded shadow-sm"
        style={{ maxHeight: "15rem"}}
        src={OffsiteImg}
        alt="offsite"
      />
      <div class="row justify-content-around">
        <div class="col-md-3 mb-5 d-flex flex-column  text-justify">
          <h2 class="text-center mb-4">Offsite 1</h2>
          <p class="">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div class="col-md-3 mb-5 d-flex flex-column text-justify">
          <h2 class="text-center mb-4">Offsite 2</h2>
          <p class="">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div class="col-md-3 col-md-offset-2 mb-5 d-flex flex-column text-justify">
          <h2 class="text-center mb-4">Offsite 3</h2>
          <p class="">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
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
export default Offsites
