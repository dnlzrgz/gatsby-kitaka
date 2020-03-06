import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/Layout';

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
    <Layout title="404">
      <div
        className="container"
        style={{ height: '100vh', display: 'grid', placeContent: 'center' }}
      >
        <h1 style={{ textAlign: 'center' }}>
          {data.site.siteMetadata.pages.notFound.msg}
        </h1>
      </div>
    </Layout>
  );
};

export default NotFound;
