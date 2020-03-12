import React from 'react';
import { Link } from 'gatsby';

import styles from './nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <Link to="/" activeStyle={{ display: 'none' }}>
          Home
        </Link>
      </div>
      <Link to="/blog/" activeStyle={{ display: 'none' }}>
        Blog
      </Link>
    </header>
  );
};

export default Nav;
