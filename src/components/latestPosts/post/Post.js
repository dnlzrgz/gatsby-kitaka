import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './post.module.scss';

const Post = ({ to, title, description }) => (
  <article className={styles.root}>
    <header>
      <Link to={to}>{title}</Link>
    </header>
    <main>
      <p>{description}</p>
    </main>
  </article>
);

Post.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
