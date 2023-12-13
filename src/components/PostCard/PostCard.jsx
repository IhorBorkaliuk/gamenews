import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate } from 'react-router-dom';


export const PostCard = ({ el }) => {
   const navigate = useNavigate();

   const handleClick = () => {
     navigate(`/${el.id}`, { state: { el } });
   };
return (
  <Card className="h-100" onClick={handleClick}>
    <Card.Img variant="top" src={el.main_image} alt={el.short_description} />
    <NavLink
      to={`/${el.id}`}
      rel="noopener noreferrer"
      className="stretched-link"
    >
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>{el.short_description}</Card.Text>
      </Card.Body>
    </NavLink>
  </Card>
);
}

export default PostCard
