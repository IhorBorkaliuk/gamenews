import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardLink } from './PostsStyled';

export function PostsList({ posts }) {
  console.log(posts);
  return (
    <Row xs={1} md={4} className="g-4">
      {posts.map((el, index) => (
        <Col key={index} className="d-flex">
          <Card className="flex-fill">
            <img variant="top" src={el.main_image} />
            <CardLink href={el.article_url} target="_blank">
              {' '}
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.short_description}</Card.Text>
              </Card.Body>
            </CardLink>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
