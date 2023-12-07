import React, { useState, useEffect } from 'react';
import API from 'services/API';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchBar from 'components/SearchBar/SearchBar';
import OnePost from 'components/OnePost/OnePost';

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

  if (filtered.length === 0) {
    setFilteredPosts([])
  }
  console.log(filtered.length);
};

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Row xs={1} md={4} className="g-4 mt-4 d-flex align-items-stretch">
        {(filteredPosts.length > 0 ? filteredPosts : posts).map((el, index) => (
          <Col key={index}>
            <OnePost el={el}></OnePost>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PostsList;
