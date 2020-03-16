import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './more.module.scss';

const More = ({ to, text }) => (
  <Link to={to} className={styles.root}>
    {text}
  </Link>
);

More.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default More;
