import React, { useState, useEffect } from 'react';
import API from 'services/API';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardLink } from './PostsStyled';
import SearchBar from 'components/SearchBar/SearchBar';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const result = await API();
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };

    loadPosts();
  }, []);

  const handleSearch = searchTerm => {
    const filtered = posts.filter(el =>
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Row xs={1} md={4} className="g-4 mt-4">
        {(filteredPosts.length > 0 ? filteredPosts : posts).map((el, index) => (
          <Col key={index} className="d-flex">
            <Card className="flex-fill">
              <img
                variant="top"
                src={el.main_image}
                alt={el.short_description}
              />
              <CardLink href={el.article_url} target="_blank">
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.short_description}</Card.Text>
                </Card.Body>
              </CardLink>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PostsList;
