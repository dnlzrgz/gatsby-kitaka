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
          hero {
            doodle
          }
        }
      }
    }
  `)

  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(
          /doodles/${data.site.siteMetadata.hero.doodle}.svg
        )`,
      }}
    >
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.description}</h2>
      </div>
    </div>
  )
}

export default Hero
