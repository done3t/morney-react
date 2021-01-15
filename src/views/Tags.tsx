import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button, ButtonWrapper} from 'components/Button';
import {useTags} from '../hooks/useTags';

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin: 0 16px;

    > a {
      padding: 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

function Tags() {
  const {tags, addTag} = useTags();
  console.log('use tags')
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.id}:{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <ButtonWrapper>
        <Button onClick={addTag}>新增标签</Button>
      </ButtonWrapper>
    </Layout>
  );
}

export default Tags;