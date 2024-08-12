import React from 'react';
import {
  NoNewsMessageContainer,
  NoNewsMessageText,
} from './StyledNoPostsFound';

const NoPostsFound = ({ query }) => {

  return (
    <NoNewsMessageContainer>
      <NoNewsMessageText>
        There are no results for your request '{query}'
      </NoNewsMessageText>
    </NoNewsMessageContainer>
  );
};

export default NoPostsFound;




