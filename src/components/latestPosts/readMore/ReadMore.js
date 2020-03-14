import React from 'react';
import { Link } from 'gatsby';

import styles from './readMore.module.scss';

const LatestPosts = ({ to }) => (
  <Link to={to} className={styles.root}>
    Read more
  </Link>
);

export default LatestPosts;
