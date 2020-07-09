import React from "react"
import BasketImg from '../images/baskets/basket.png'
import { ListGroup } from 'react-bootstrap'

const Baskets = (props) => (
  <div id="baskets" class="p-5 d-flex align-items-center full-height ">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="mb-5">
          <h1 class="mb-5">Flamingo Baskets</h1>
          <img
                class="mb-5 img-fluid rounded-circle shadow"
                style={{ maxHeight: "15rem" }}
                src={BasketImg}
                alt="wrapkit"
              />
        </div>
        <div class="col-md-9 ">
        <ListGroup class="shadow-sm">
            <ListGroup.Item class="mb-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."</ListGroup.Item>
            <ListGroup.Item class="mb-5">"Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur."</ListGroup.Item>
            <ListGroup.Item class="mb-5">"Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."</ListGroup.Item>
          </ListGroup>
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
export default Baskets
