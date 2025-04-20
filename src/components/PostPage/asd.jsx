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
  const { id } = useParams(); // Отримуємо ID поста з URL
  const [commentsPost, setCommentsPost] = useState([]);
  const location = useLocation();
  const { state } = location;

  // Санітизуємо текст статті
  const article = state.article_content;
  const cleanText = DOMPurify.sanitize(article, { ALLOWED_TAGS: [] });

  // Завантажуємо коментарі для поточного поста із localStorage
  useEffect(() => {
    const storedComments = localStorage.getItem(`commentsPost_${id}`);
    if (storedComments) {
      setCommentsPost(JSON.parse(storedComments));
    }
  }, [id]);

  // Обробка додавання нового коментаря
  const handleSubmit = newComment => {
    const updatedComments = [...commentsPost, newComment];
    setCommentsPost(updatedComments);
    // Зберігаємо нові коментарі для конкретного поста в localStorage
    localStorage.setItem(`commentsPost_${id}`, JSON.stringify(updatedComments));
  };

  // Обробка видалення коментаря
  const handleDelete = commentId => {
    const updatedComments = commentsPost.filter(
      comment => comment.id !== commentId
    );
    setCommentsPost(updatedComments);
    // Оновлюємо коментарі в localStorage
    localStorage.setItem(`commentsPost_${id}`, JSON.stringify(updatedComments));
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
          <DeleteButton onClick={() => handleDelete(post.id)}>X</DeleteButton>
          <ReviewTitle>{post.post}</ReviewTitle>
        </ReviewItem>
      ))}

      <CommentPostForm onSubmit={handleSubmit} />
    </Wrapper>
  );
};

export default PostPage;
