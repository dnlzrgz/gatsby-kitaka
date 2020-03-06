import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet title={`${title} - ${data.site.siteMetadata.title}`} defer={false}>
      <html lang="en" />
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
