import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(Number(id));
  return (
    <div>{tag?.name ?? '无此标签'}</div>
  );
};

export {Tag};