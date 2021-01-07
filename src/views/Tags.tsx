import Layout from 'components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 0;
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  color: white;
  background: #f60;
  border-radius: 4px;
`;
const ButtonWrapper = styled.div`
  align-self: center;
  padding: 16px;
  margin-top: 32px;
`;
const Box = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Box>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right"/>
          </li>
        )}
      </TagList>
      <ButtonWrapper>
        <Button>新增标签</Button>
      </ButtonWrapper>
    </Box>
  );
}

export default Tags;