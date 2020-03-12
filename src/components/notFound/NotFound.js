import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './notFound.module.scss';

const NotFound = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          pages {
            notFound {
              msg
            }
          }
        }
      }
    }
  `);

  return (
    <div className={`container ${styles.root}`}>
      <h1>{data.site.siteMetadata.pages.notFound.msg}</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
