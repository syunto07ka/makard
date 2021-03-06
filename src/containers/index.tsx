import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListContainer from 'containers/pages/List';
import ProfileContainer from 'containers/pages/Profile';

const Containers: React.FC = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <ListContainer />
        </Route>
        <Route path="/profile">
          <ProfileContainer />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default Containers;
