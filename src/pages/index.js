import React from "react"

import Hero from "../components/hero/Hero"
import HomeSections from "../components/homeSections/HomeSections"
import LatestPosts from "../components/latestPosts/LatestPosts"
import Testimonies from "../components/testimonies/Testimonies"
import Footer from "../components/footer/Footer"

const IndexPage = () => {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <HomeSections />
        <LatestPosts />
        <Testimonies />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
