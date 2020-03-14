import React from 'react';
import { Link } from 'gatsby';

import styles from './findMore.module.scss';

const FindMore = ({ to }) => (
  <Link to={to} className={styles.root}>
    Read more
  </Link>
);

export default FindMore;
