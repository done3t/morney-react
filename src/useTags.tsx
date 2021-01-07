import {useState} from 'react';
import {createId} from './lib/createId';

type Tag = {
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
  const [tags, setTags] = useState<Tag[]>(defaultTags);
  const findTag = (id: number) => tags.find(tag => tag.id === id);
  const findTagIndex = (id: number) => tags.findIndex(tag => tag.id === id);
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, {id, name: obj.name});
    setTags(tagsClone);
  };
  return {tags, setTags, findTag, findTagIndex, updateTag};
};
export {useTags};
export type {Tag};
