import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Input} from 'components/Input';
import {Button, ButtonWrapper} from 'components/Button';

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag, updateTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(Number(id))!;
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <InputWrapper>
        <Input label="标签名" type="text"
               placeholder="标签名" value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button>删除标签</Button>
      </ButtonWrapper>
    </Layout>
  );
};

export {Tag};