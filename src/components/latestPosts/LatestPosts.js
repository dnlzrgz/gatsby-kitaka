import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import More from '../more/More';
import Post from './post/Post';

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
        <h1>Latest Posts</h1>
      </header>

      <main>
        {data.allMarkdownRemark.nodes.map((post) => {
          return (
            <Post
              to="#"
              key={post.id}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
            />
          );
        })}
      </main>

      <footer className={styles.footer}>
        <More to="/blog/" text="Read more" />
      </footer>
    </section>
  );
};

export default LatestPosts;
