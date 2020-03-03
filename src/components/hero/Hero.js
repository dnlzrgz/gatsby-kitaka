import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./hero.module.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          heroBackground
        }
      }
    }
  `)

  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(
          /images/${data.site.siteMetadata.heroBackground}
        )`,
      }}
    >
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.description}</h2>
    </div>
  )
}

export default Hero
