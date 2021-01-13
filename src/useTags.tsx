import {useState} from 'react';
import {createId} from './lib/createId';

type TagPO = {
  id: number,
  name: string
}
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
const useTags = () => {
  const [tags, setTags] = useState<TagPO[]>(defaultTags);
  const findTag = (id: number) => tags.find(tag => tag.id === id);
  const findTagIndex = (id: number) => tags.findIndex(tag => tag.id === id);
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag};
};
export {useTags};
export type {TagPO};
