import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./testimonies.module.scss"

const Testimonies = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "testimony", ne: "section" } } }
        sort: { order: ASC, fields: [frontmatter___order] }
      ) {
        nodes {
          frontmatter {
            title
            description
            type
          }
        }
      }
    }
  `)

  return (
    <section className={`${styles.root} container`}>
      <header>
        <h1 className={styles.title}>Testimonies</h1>
      </header>

      <main>
        {data.allMarkdownRemark.nodes.map(testimony => {
          return (
            <div key={testimony.id} className={styles.testimony}>
              <div className={styles.avatar}></div>
              <p className={styles.name}>{testimony.frontmatter.title}</p>
            </div>
          )
        })}
      </main>
    </section>
  )
}

export default Testimonies
