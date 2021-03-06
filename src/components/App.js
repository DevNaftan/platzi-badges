import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import BadgesContainer from '../pages/BadgesContainer';
import BadgeNewContainer from '../pages/BadgeNewContainer';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import BadgeEditContainer from '../pages/BadgeEditContainer';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/badges' component={BadgesContainer} />
          <Route exact path='/badges/new' component={BadgeNewContainer} />
          <Route
            exact
            path='/badges/:badgeId'
            component={BadgeDetailsContainer}
          />
          <Route
            exact
            path='/badges/:badgeId/edit'
            component={BadgeEditContainer}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
