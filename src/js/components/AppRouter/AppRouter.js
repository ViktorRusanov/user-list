import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import UserList from '../UserList';
import UserCard from '../UserCard';

const appRouter = () => (
  <Switch>
    <Route exact path="/" component={UserList} />
    <Route path="/:id" component={UserCard} />
  </Switch>
);

export default withRouter(appRouter);