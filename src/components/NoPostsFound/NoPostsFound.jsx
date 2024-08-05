import React from 'react';
import {
  NoNewsMessageContainer,
  NoNewsMessageText,
} from './StyledNoPostsFound';

const NoPostsFound = ({ query }) => {
  return (
    <NoNewsMessageContainer>
      <NoNewsMessageText>
        Новин за запитом '{query}' не знайдено.
      </NoNewsMessageText>
    </NoNewsMessageContainer>
  );
};

export default NoPostsFound;
