import Layout from 'components/Layout';
import React, {useState} from 'react';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import styled from 'styled-components';

const Box = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  return (
    <Box>
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <TagsSection value={selected.tags}
                   onChange={(tags) => {
                     setSelected({
                       ...selected,
                       tags: tags
                     });
                   }}
      />
      <NoteSection value={selected.note}
                   onChange={note => {
                     setSelected({
                       ...selected,
                       note
                     });
                   }}
      />
      <CategorySection value={selected.category}
                       onChange={category => {
                         setSelected({
                           ...selected,
                           category
                         });
                       }}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => {
                          setSelected({
                            ...selected,
                            amount: amount
                          });
                        }}
                        onOK={() => {}}/>
    </Box>
  );
}

export default Money;