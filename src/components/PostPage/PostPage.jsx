import React from 'react';
import { useLocation } from 'react-router';
import DOMPurify from 'dompurify';
import { Image, Title, Wrapper, Paragraph, Link } from './PostPageStyled';

const PostPage = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);

  const article = state.article_content;
  const cleanText = DOMPurify.sanitize(article, { ALLOWED_TAGS: [] });

  return (
    <Wrapper>
      <Title>{state.title}</Title>
      <Image src={state.main_image} alt={state.short_description}></Image>
      <Paragraph>{cleanText}</Paragraph>

      <Paragraph>
        Source:{' '}
        <Link href={state.article_url} target="_blank">
          {state.article_url}
        </Link>
      </Paragraph>
    </Wrapper>
  );
};

export default PostPage;
