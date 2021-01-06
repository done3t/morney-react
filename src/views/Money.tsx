import Layout from 'components/Layout';
import React from 'react';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import styled from 'styled-components';

const Box = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <Box>
      <TagsSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </Box>
  );
}

export default Money;