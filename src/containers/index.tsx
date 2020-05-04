import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListContainer from 'containers/pages/List';

const Containers: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <ListContainer />
      </Route>
    </Switch>
  </Router>
);

export default Containers;
