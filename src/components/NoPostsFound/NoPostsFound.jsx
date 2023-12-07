import React from 'react';
import { NoNewsMessageContainer, NoNewsMessageText } from './StyledNoPostsFound';

const NoPostsFound = ({ searchTerm }) => {
  return (
    <NoNewsMessageContainer style={{ textAlign: 'center', width: '100%' }}>
      <NoNewsMessageText>
        Новин за запитом "{searchTerm}" не знайдено.
      </NoNewsMessageText>
    </NoNewsMessageContainer>
  );
};

export default NoPostsFound;
