import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from 'components/Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4px 0;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="money"/>
          <Link to="/money">Money</Link>
        </li>
        <li>
          <Icon name="label"/>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Icon name="chart"/>
          <Link to="/statistics">Statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;