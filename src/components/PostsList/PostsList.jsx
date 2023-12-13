import React, { useState, useEffect } from 'react';
import API from 'services/API';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import SearchBar from 'components/SearchBar/SearchBar';
import PostCard from 'components/PostCard/PostCard';
import NoPostsFound from 'components/NoPostsFound/NoPostsFound';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const result = await API();
        setPosts(result);
            console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    loadPosts();
  }, []);

  const handleSearch = searchTerm => {
    setSearchTerm(searchTerm);
    const filtered = posts.filter(el =>
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Row xs={1} md={4} className="g-4 mt-4 d-flex align-items-stretch">
        {searchTerm && filteredPosts.length === 0 ? (
          <Col>
            <NoPostsFound searchTerm={searchTerm} />
          </Col>
        ) : (
          (filteredPosts.length > 0 ? filteredPosts : posts).map(
            (el, index) => (
              <Col key={index}>
                <PostCard el={el}></PostCard>
              </Col>
            )
            )
        )}
      </Row>

    </div>
  );
};

export default PostsList;
