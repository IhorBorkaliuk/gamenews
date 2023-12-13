import React from 'react'
import { useLocation } from 'react-router';
import DOMPurify from 'dompurify';
import { Image, Title, Wrapper, Paragraph, Link } from './PostPageStyled';



const PostPage = () => {

  const location = useLocation();
  const { state } = location;
    const el = state ? state.el : null;
    console.log(el);
    const article = el.article_content; 
    const cleanText = DOMPurify.sanitize(article, { ALLOWED_TAGS: [] });
    return (
      <Wrapper>
        <Title>{el.title}</Title>
        <Image src={el.main_image} alt={el.short_description}></Image>
        <Paragraph>{cleanText}</Paragraph>

        <Paragraph>
          Source:{' '}
          <Link href={el.article_url} target="_blank">
            {el.article_url}
          </Link>
        </Paragraph>
      </Wrapper>
    );
};

export default PostPage;
