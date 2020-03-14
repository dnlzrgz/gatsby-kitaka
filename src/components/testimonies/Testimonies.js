import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Testimony from './testimony/Testimony';
import FindMore from './findMore/FindMore';

import styles from './testimonies.module.scss';

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
  `);

  return (
    <section className={`${styles.root} container`}>
      <header>
        <h1>Testimonies</h1>
      </header>

      <main>
        {data.allMarkdownRemark.nodes.map((testimony) => {
          return (
            <Testimony
              key={testimony.id}
              avatar=""
              to="#"
              title={testimony.frontmatter.title}
            />
          );
        })}
      </main>

      <footer>
        <FindMore to="#" />
      </footer>
    </section>
  );
};

export default Testimonies;
