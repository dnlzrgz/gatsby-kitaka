import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './footer.module.scss';

const SocialLink = (props) => {
  const { name, url } = props;
  return <a href={url}>{name}</a>;
};

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const SocialLinks = (props) => {
  const { links } = props;
  return (
    <ul className={styles.links}>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <SocialLink name={link.name} url={link.url} />
          </li>
        );
      })}
    </ul>
  );
};

SocialLinks.propTypes = {
  links: PropTypes.array.isRequired,
};

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copy
          social {
            name
            url
          }
        }
      }
    }
  `);

  return (
    <footer className={styles.root}>
      <section>
        <SocialLinks links={data.site.siteMetadata.social} />
      </section>
      <section>
        <p
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.copy }}
        ></p>
      </section>
    </footer>
  );
};

export default Footer;
