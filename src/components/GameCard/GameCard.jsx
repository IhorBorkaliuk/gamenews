import React from 'react'
import Card from 'react-bootstrap/Card';
import { StyledNavLink } from 'components/PostCard/PostCardStyled';

export const GameCard = ({ el }) => {
  return (
    <div>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={el.thumbnail}
          alt={el.short_description}
        />
        <StyledNavLink
          to={'/games/:id'}
          state={el}
          rel="noopener noreferrer"
          className="stretched-link"
        >
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.short_description}</Card.Text>
          </Card.Body>
        </StyledNavLink>
      </Card>
    </div>
  );
}
