import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { StyledNavLink } from './PostCardStyled';

export const PostCard = ({ el }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${el.id}`, { state: { el } });
  };
  return (
    <Card className="h-100" onClick={handleClick}>
      <Card.Img variant="top" src={el.main_image} alt={el.short_description} />
      <StyledNavLink
        to={'/:id'}
        rel="noopener noreferrer"
        className="stretched-link"
      >
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.short_description}</Card.Text>
        </Card.Body>
      </StyledNavLink>
    </Card>
  );
};

export default PostCard;
