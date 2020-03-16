import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import More from '../more/More';

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
      <More to="/" text="Return Home" />
    </div>
  );
};

export default NotFound;
