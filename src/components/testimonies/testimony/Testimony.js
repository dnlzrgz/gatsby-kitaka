import React from 'react';
import { Link } from 'gatsby';

import styles from './testimony.module.scss';

const Testimony = ({ avatar, to, title }) => {
  return (
    <article className={styles.root}>
      <header>
        {
          // Avatar
        }
        <div></div>
      </header>
      <main>
        <Link to={to}>{title}</Link>
      </main>
    </article>
  );
};

export default Testimony;
