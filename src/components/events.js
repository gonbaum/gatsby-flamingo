import React from "react"
import { ListGroup } from 'react-bootstrap'

const Events = props => (
  <div id="events" class="p-5  d-flex align-items-center full-height ">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <h1 class="mb-5">Events</h1>
          <p class="text-justify mb-5">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in cListGrouppa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
          <ListGroup variant="flush">
            <ListGroup.Item style={{backgroundColor: 'transparent'}} class="mb-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: 'transparent'}} class="mb-5">
              "Ut enim ad minim veniam, quis nostrud exercitation ListGrouplamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nListGroupla pariatur."
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: 'transparent'}} class="mb-5">
              "Excepteur sint occaecat cupidatat non proident, sunt in cListGrouppa qui
              officia deserunt mollit anim id est laborum."
            </ListGroup.Item>
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
export default Events
