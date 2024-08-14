import React from 'react';
import Card from 'react-bootstrap/Card';
import {
  StyledCard,
  StyledNavLink,
  StyledCardImg,
  StyledCardBody,
} from './PostCardStyled';

export const PostCard = ({ el }) => {
  return (
    <StyledCard className="h-100">
      <StyledCardImg
        variant="top"
        src={el.main_image}
        alt={el.short_description}
      />
      <StyledNavLink
        to={`/${el.id}`}
        state={el}
        rel="noopener noreferrer"
        className="stretched-link"
      >
        <StyledCardBody>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.short_description}</Card.Text>
        </StyledCardBody>
      </StyledNavLink>
    </StyledCard>
  );
};

export default PostCard;
