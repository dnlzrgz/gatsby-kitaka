import React from "react"

import Hero from "../components/hero/Hero"
import IndexContent from "../components/indexContent/IndexContent"

const IndexPage = () => {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <IndexContent />
      </main>
    </React.Fragment>
  )
}

export default IndexPage
