import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./latestPosts.module.scss"

const LatestPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post", ne: "section" } } }
        sort: { order: ASC, fields: [frontmatter___publishDate] }
        limit: 3
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
    <section className={styles.root}>
      <header>
        <h1>Latest Posts</h1>
      </header>

      {data.allMarkdownRemark.nodes.map(post => {
        return (
          <article key={post.id}>
            <header>
              <h2>{post.frontmatter.title}</h2>
            </header>
            <main>{post.frontmatter.description}</main>
          </article>
        )
      })}
    </section>
  )
}

export default LatestPosts
