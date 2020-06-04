import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Location from '../pages/Location';
import Station from '../pages/Station';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Location} />
    <Route path="/location/:id/stations" component={Station} />
  </Switch>
);

export default Routes;
