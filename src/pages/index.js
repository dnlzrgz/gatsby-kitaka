import React from "react"

import Layout from "../components/layout/Layout"
import Hero from "../components/hero/Hero"
import HomeSections from "../components/homeSections/HomeSections"
import LatestPosts from "../components/latestPosts/LatestPosts"
import Testimonies from "../components/testimonies/Testimonies"

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <HomeSections />
      <LatestPosts />
      <Testimonies />
    </Layout>
  )
}

export default IndexPage
