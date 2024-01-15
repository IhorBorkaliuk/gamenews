import React from 'react';
import { NoNewsMessageContainer, NoNewsMessageText } from './StyledNoPostsFound';

const NoPostsFound = ({ searchParam }) => {
  console.log(searchParam);
  return (
    <NoNewsMessageContainer style={{ textAlign: 'center', width: '100%' }}>
      <NoNewsMessageText>
        Новин за запитом "{searchParam}" не знайдено.
      </NoNewsMessageText>
    </NoNewsMessageContainer>
  );
};

export default NoPostsFound;
