import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Instruct from '../components/pages/Instruct';
import Monitor from '../components/pages/Monitor';
import Prepare from '../components/pages/Prepare';
import ErrorBoundary from './ErrorBoundary';

const ResultsComponent = React.lazy(() => import('../components/pages/Results'));

const AppRoot = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Switch>
          <Route path='/prepare'>
            <Prepare />
          </Route>
          <Route path='/instruct'>
            <Instruct />
          </Route>
          <Route path='/monitor'>
            <Monitor />
          </Route>
          <Route path='/results'>
            <Suspense fallback={<div>Loading Please Wait...</div>}>
              <ResultsComponent />
            </Suspense>
          </Route>
          <Route path='*'>
            <Prepare />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Layout>
  );
};

export default AppRoot;
