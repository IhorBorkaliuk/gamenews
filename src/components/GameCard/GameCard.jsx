import React from 'react';
import Card from 'react-bootstrap/Card';
import { StyledCard, StyledCardImg, StyledNavLink } from './GameCardStyled';

export const GameCard = ({ el }) => {
  return (
    <StyledCard className="h-100">
      <StyledCardImg
        variant="top"
        src={el.thumbnail}
        alt={el.short_description}
      />
      <StyledNavLink
        to={`/games/${el.id}`}
        state={el}
        rel="noopener noreferrer"
        className="stretched-link"
      >
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.short_description}</Card.Text>
        </Card.Body>
      </StyledNavLink>
    </StyledCard>
  );
};
