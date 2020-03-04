import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./homeSections.module.scss"

const HomeSections = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "section" } } }
        sort: { order: ASC, fields: [frontmatter___order] }
      ) {
        nodes {
          frontmatter {
            title
            doodle
          }
          html
        }
      }
    }
  `)

  return (
    <div className={styles.root}>
      {data.allMarkdownRemark.nodes.map(section => {
        return (
          <section key={section.id}>
            <header>
              <h1>{section.frontmatter.title}</h1>
            </header>
            <main
              dangerouslySetInnerHTML={{
                __html: section.html,
              }}
            ></main>
            <div
              style={{
                backgroundImage: `url(/doodles/${section.frontmatter.doodle}.svg)`,
              }}
            ></div>
          </section>
        )
      })}
    </div>
  )
}

export default HomeSections
