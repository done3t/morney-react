import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import Tags from 'views/Tags';
import NoMatch from 'views/NoMatch';
import {Tag} from 'views/Tag';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags/>
          </Route>
          <Route exact path="/tags/:tag">
            <Tag/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;