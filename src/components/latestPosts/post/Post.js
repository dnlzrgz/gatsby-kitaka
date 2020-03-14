import React from 'react';
import { Link } from 'gatsby';

import styles from './post.module.scss';

const Post = ({ to, title, description }) => (
  <article className={styles.root}>
    <header>
      <Link to="#">{title}</Link>
    </header>
    <main>
      <p>{description}</p>
    </main>
  </article>
);

export default Post;
