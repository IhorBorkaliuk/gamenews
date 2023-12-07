import React from 'react'
import Card from 'react-bootstrap/Card';
import { CardLink } from 'components/Posts/PostsStyled';


export const OnePost = ({el}) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={el.main_image} alt={el.short_description} />
      <CardLink
        href={el.article_url}
        target="_blank"
        rel="noopener noreferrer"
        className="stretched-link"
      >
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.short_description}</Card.Text>
        </Card.Body>
      </CardLink>
    </Card>
  );
}

export default OnePost
