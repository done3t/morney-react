import Layout from 'components/Layout';
import React, {useState} from 'react';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';

const Box = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

type Category = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (keyOfSelected: Partial<typeof selected>) => {
    setSelected({
      ...selected, ...keyOfSelected
    });
  };
  const submit = () => {
    if (addRecord(selected)) {
      setSelected(defaultFormData);
      alert('保存成功');
    }
  };
  return (
    <Box>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}
      />
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}
      />
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={category => onChange({category})}
        />
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOK={submit}/>
    </Box>
  );
}

export default Money;