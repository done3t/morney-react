import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex: 1;
  overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Money() {
  return <h2>Money</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function NoMatch() {
  return <div>页面不存在，<Link to="/money">返回首页</Link></div>;
}

export default App;