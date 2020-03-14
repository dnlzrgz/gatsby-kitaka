import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './latestPosts.module.scss';

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
  `);

  return (
    <section className={styles.root}>
      <header className="container">
        <h1 className={styles.title}>Latest Posts</h1>
      </header>

      <main className={styles.posts}>
        {data.allMarkdownRemark.nodes.map((post) => {
          return (
            <article key={post.id} className={styles.post}>
              <header>
                <a href="#">{post.frontmatter.title}</a>
              </header>
              <main>
                <p>{post.frontmatter.description}</p>
              </main>
            </article>
          );
        })}
      </main>
    </section>
  );
};

export default LatestPosts;
