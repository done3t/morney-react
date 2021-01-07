import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';

const Wrapper = styled.section`
  flex: 1;
  overflow: auto;
  background: #FFF;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      font-size: 14px;
      padding: 3px 18px;
      margin: 8px 12px;

      &.selected {
        background: #f60;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = prompt('新标签的名称为：');
    if (tagName && tagName.trim()) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => selectedTags.includes(tag) ? 'selected' : '';

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={() => {
            onToggleTag(tag);
          }} className={getClass(tag)}>
            {tag}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export {TagsSection};