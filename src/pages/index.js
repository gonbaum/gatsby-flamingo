import React from "react"
import Layout from "../components/layout"
import MissionSection from "../components/missionSection"
import About from "../components/about"
import Events from "../components/events"
import Offsites from "../components/offsites"
import Contact from "../components/contact"
import Baskets from "../components/baskets"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="d-flex flex-column">
      <MissionSection />
      <About />
      <Events />
      <Offsites />
      <Baskets />
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
