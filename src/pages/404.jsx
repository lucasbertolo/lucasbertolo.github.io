import React from 'react';
import Layout from '../components/layout';
import { ErrorPage } from '../components/Helpers/Error';
import { CultureProvider } from '../core/resources';

const NotFoundPage = () => (
  <Layout>
    <CultureProvider>
      <ErrorPage kind="404" />
    </CultureProvider>
  </Layout>
);

export default NotFoundPage;
