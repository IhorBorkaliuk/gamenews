import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import DOMPurify from 'dompurify';
import {
  Image,
  Title,
  Wrapper,
  Paragraph,
  Link,
  ReviewItem,
  DeleteButton,
  ReviewTitle,
} from './PostPageStyled';
import CommentPostForm from 'components/Reviews/CommentPostForm';

const PostPage = () => {
  const [commentsPost, setCommentsPost] = useState(() => {
    const savedComments = localStorage.getItem('commentsPost');
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const location = useLocation();
  console.log(location);
  const { state } = location;

  const { id } = useParams()

  const {login} = JSON.parse(localStorage.getItem('regData'))
  console.log(login);

  const article = state.article_content;
  const cleanText = DOMPurify.sanitize(article, { ALLOWED_TAGS: [] });

      useEffect(() => {
        const storedComments = localStorage.getItem(`commentsPost_${id}`);
        if (storedComments) {
          setCommentsPost(JSON.parse(storedComments))
        }
      }, [id]);

  const handlesubmit = newComment => {
    const updatedComments = [...commentsPost, newComment]
    setCommentsPost(updatedComments)
    localStorage.setItem(`commentsPost_${id}`, JSON.stringify(updatedComments));
  }

    const handleDelete = commentID => {
      const updatedComments = commentsPost.filter(post => post.id !== commentID)
      setCommentsPost(updatedComments)
      localStorage.setItem(
        `commentsPost_${id}`,
        JSON.stringify(updatedComments)
      );
  };
  


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
      {commentsPost.map((post, index) => (
        <ReviewItem key={index}>
          <b>{login}</b>
          <DeleteButton onClick={() => handleDelete(post.id)}>X</DeleteButton>
          <ReviewTitle>{post.post}</ReviewTitle>
        </ReviewItem>
      ))}
      <CommentPostForm onSubmit={handlesubmit}></CommentPostForm>
    </Wrapper>
  );
};

export default PostPage;
