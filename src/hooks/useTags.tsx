import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

type TagPO = {
  id: number,
  name: string
}
const useTags = () => {
  const [tags, setTags] = useState<TagPO[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.find(tag => tag.id === id);
  const findTagIndex = (id: number) => tags.findIndex(tag => tag.id === id);
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null && tagName.trim() !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.find(t => t.id === id);
    return tag ? tag.name : '';
  };
  return {tags, addTag, setTags, findTag, findTagIndex, updateTag, deleteTag, getName};
};
export {useTags};
export type {TagPO};
