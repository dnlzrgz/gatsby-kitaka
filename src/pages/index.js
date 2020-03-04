import React from "react"

import Hero from "../components/hero/Hero"
import HomeSections from "../components/homeSections/HomeSections"
import LatestPosts from "../components/latestPosts/LatestPosts"

const IndexPage = () => {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <HomeSections />
        <LatestPosts />
      </main>
    </React.Fragment>
  )
}

export default IndexPage
