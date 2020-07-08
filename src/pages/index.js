import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MissionSection from "../components/missionSection"
import About from "../components/about"
import Events from "../components/events"
import Offsites from "../components/offsites"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="d-flex flex-column">
          <MissionSection />
          <About />
          <Events />
          <Offsites />
          <div class="p-5 " style={{height: '77vh'}}>Flex item 3</div>
        </div>
  </Layout>
)

export default IndexPage
