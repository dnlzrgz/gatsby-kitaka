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
        }
      }
    }
  `)

  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>{data.site.siteMetadata.title}</h1>
        <h2 className={styles.subtitle}>
          {data.site.siteMetadata.description}
        </h2>
      </div>
    </div>
  )
}

export default Hero
