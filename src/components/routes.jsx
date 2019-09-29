import React from 'react';
import {Switch, Route} from 'react-router';
import artists from '../constants/artists';
import Artist from './artist';

const Routes = () => {
  return (
    <div>
      <Switch>
        {artists.map(({name}, idx) => (
          <Route
            path={`/${name}`}
            key={idx + Math.random()}
            render={() => <Artist name={name} />}
          />
        ))}
      </Switch>
    </div>
  );
};

export default Routes;
