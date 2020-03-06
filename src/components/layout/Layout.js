import React, { Fragment } from 'react';

import Head from '../head/Head';
import Footer from '../footer/Footer';

import styles from './layout.module.scss';

const Layout = (props) => {
  return (
    <Fragment>
      <Head title={props.title} />
      <main className={styles.root}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
