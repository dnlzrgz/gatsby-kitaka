import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './footer.module.scss';

const SocialLink = (props) => {
  const { name, url } = props;
  return <a href={url}>{name}</a>;
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
        <p>{data.site.siteMetadata.copy}</p>
      </section>
    </footer>
  );
};

export default Footer;
