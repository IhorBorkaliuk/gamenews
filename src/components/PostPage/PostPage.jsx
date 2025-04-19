import React from 'react';
import { useLocation } from 'react-router';
import DOMPurify from 'dompurify';
import { Image, Title, Wrapper, Paragraph, Link } from './PostPageStyled';
import CommentPostForm from 'components/Reviews/CommentPostForm';

const PostPage = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);

  const article = state.article_content;
  const cleanText = DOMPurify.sanitize(article, { ALLOWED_TAGS: [] });

  return (
    <Wrapper>
      <Title>{state.title}</Title>
      <Image src={state.main_image} alt={state.short_description} />
      <Paragraph dangerouslySetInnerHTML={{ __html: cleanText }} />

      <Paragraph>
        Source:{' '}
        <Link
          href={state.article_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {state.article_url}
        </Link>
      </Paragraph>
      <CommentPostForm></CommentPostForm>
    </Wrapper>
  );
};

export default PostPage;
