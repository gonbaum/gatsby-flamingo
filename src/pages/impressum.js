import React from "react"
import Layout from "../components/layout"
import ImpressumSection from "../components/ImpressumSection"

import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <div className="d-flex flex-column">
      <ImpressumSection />
    </div>
  </Layout>
)

export default IndexPage
