import React from 'react';

import Layout from '../components/layout/Layout';
import Head from '../components/head/Head';
import NotFound from '../components/notFound/NotFound';

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="404" />
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
