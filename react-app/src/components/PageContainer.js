import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import { BGPurple } from '../styles';
import SecondPage from './SecondPage';

class PageContainer extends React.Component {

  render() {
    return (
      <BGPurple>
        <Router>
          <Switch>
            <Route path="/"
            exact={true}
            render={() =>
              <LandingPage />
            } />
            <Route path="/second"
            exact={true}
            render={() =>
              <SecondPage />
            } />
          </Switch>
        </Router>
      </BGPurple>
    )
  }
};

export default PageContainer;