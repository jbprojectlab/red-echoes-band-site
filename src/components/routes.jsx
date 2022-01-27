import React from 'react';
import { Switch, Route } from 'react-router';
import artists from '../constants/artists';
import Home from './home';
import Artist from './artist';
import NotFound from './not-found';
import Album from './album';

const Routes = () => (
  <div id="main-container">
    <Switch>
      {artists.map(({ name }, idx) => (
        <Route
          exact
          path={`/${name}`}
          key={idx + Math.random()}
          render={() => <Artist name={name} />}
        />
      ))}
      <Route exact path="/:artist/:albumTitle" component={Album} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;
