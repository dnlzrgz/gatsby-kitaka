import React from "react"

import Hero from "../components/hero/Hero"
import HomeSections from "../components/homeSections/HomeSections"

const IndexPage = () => {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <HomeSections />
      </main>
    </React.Fragment>
  )
}

export default IndexPage
